Options.Triggers.push({
  zoneId: ZoneId.EdensPromiseAnamorphosisSavage,
  triggers: [
    {
      id: 'E11S Sundered Sky Tracker Fire',
      netRegex: NetRegexes.startsUsing({ source: 'Fatebreaker', id: '5677' }),
      run: (data) => data.sunderedSafe = 'blue',
    },
    {
      id: 'E11S Sundered Sky Tracker Lightning',
      netRegex: NetRegexes.startsUsing({ source: 'Fatebreaker', id: '5678' }),
      run: (data) => data.sunderedSafe = 'red',
    },
    {
      id: 'E11S Portal Tracker',
      netRegex: NetRegexes.addedCombatantFull({ name: ['Portal Of Levin', 'Portal Of Flame'] }),
      condition: (data, matches) => {
        const isBlueSafe = matches.name === 'Portal Of Levin' && data.sunderedSafe === 'blue';
        const isRedSafe = matches.name === 'Portal Of Flame' && data.sunderedSafe === 'red';
        return isBlueSafe || isRedSafe;
      },
      run: (data, matches) => {
        data.portals = data.portals || [];
        data.portals.push({ PosX: matches.x, PosY: matches.y });
      },
    },
    {
      id: 'E11S Sundered Sky Braindead',
      // This is the "holy" Bound Of Faith, which only happens during Sundered Sky.
      netRegex: NetRegexes.startsUsing({ source: 'Fatebreaker\'s Image', id: '5BC5' }),
      delaySeconds: 6,
      durationSeconds: 5,
      promise: async (data, matches) => {
        const imageData = await window.callOverlayHandler({
          call: 'getCombatants',
          ids: [parseInt(matches.sourceId, 16)],
        });

        if (imageData === null) {
          console.error('e11s braindead: null imageData');
          return;
        }
        if (!imageData.combatants) {
          console.error('e11s braindead: null combatants');
          return;
        }
        if (!imageData.combatants.length) {
          console.error('e11s braindead: empty combatants');
          return;
        }
        if (imageData.combatants.length !== 1) {
          console.error(`e11s braindead: weird length: ${imageData.combatants.length}`);
          return;
        }

        data.sunderedImage = imageData.combatants[0];
      },
      alertText: (data, matches, output) => {
        // Portals spawn on either cardinals or intercardinals.
        // The center of the room is 100,100.
        // Intercards look like (100 +/- 8, 100 +/- 8).
        // Cardinals look like (100 +/- 11, 100) or (100, 100 +/- 11).

        if (!data.portals) {
          console.error('e11s braindead: missing portals');
          return;
        }
        if (data.portals.length !== 2) {
          console.error(`e11s braindead: weird length: ${data.portals.length}`);
          return;
        }
        if (!data.sunderedImage) {
          console.error('e11s braindead: failed to get sundered image');
          return;
        }

        // Map N = 0, NE = 1, ..., NW = 7
        const posToDirNumber = (obj) => {
          return Math.round(4 - 4 * Math.atan2(obj.PosX - 100, obj.PosY - 100) / Math.PI) % 8;
        };

        const portal0 = posToDirNumber(data.portals[0]);
        const portal1 = posToDirNumber(data.portals[1]);
        // Find the average of the two portals in mod 8 space.
        let safeDir = Math.floor((portal0 + portal1) / 2) % 8;
        // edge case for averaging.
        if (Math.min(portal0, portal1) === 0 && Math.max(portal0, portal1) === 6)
          safeDir = 7;
        const safeIsCardinal = safeDir % 2 === 0;

        const sunderedDir = posToDirNumber(data.sunderedImage);
        const sunderedIsCardinal = sunderedDir % 2 === 0;

        // The sundered image rotates 1/8 of the circle clockwise after doing the Bound Of Faith.
        if (safeIsCardinal) {
          if (sunderedIsCardinal)
            return output.stayOnCardinals();
          return output.rotateToIntercardinals();
        }

        if (sunderedIsCardinal)
          return output.rotateToCardinals();
        return output.stayOnIntercardinals();
      },
      outputStrings: {
        rotateToCardinals: {
          en: 'Rotate to Cardinals',
        },
        rotateToIntercardinals: {
          en: 'Rotate to Intercardinals',
        },
        stayOnCardinals: {
          en: 'Stay on Cardinals',
        },
        stayOnIntercardinals: {
          en: 'Stay on Intercardinals',
        },
      },
    },
  ],
});
