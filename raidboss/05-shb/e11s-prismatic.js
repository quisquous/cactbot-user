// From https://github.com/quisquous/cactbot/pull/2329 (thanks, Maiko!)

const calculatePrismaticSafeZone = (images) => {
  const centerX = 100;
  const centerY = 100;

  // Convert coordinates to 8 cardinal / intercardinal positions, but
  // wrap to the first 4 (since N=0 is the same as S=4 and vice versa).
  // N at 0, NE at 1, ... NW at 7.
  const badZones = images.map((image) => {
    const x = image.PosX - centerX;
    const y = image.PosY - centerY;
    return Math.round(4 - 4 * Math.atan2(x, y) / Math.PI) % 4;
  });

  const directions = {
    0: 'dirNS',
    1: 'dirNESW',
    2: 'dirEW',
    3: 'dirSENW',
  };

  const safeZones = [0, 1, 2, 3]
    .filter((coord) => !badZones.includes(coord))
    .map((coord) => directions[coord]);

  if (safeZones.length === 0) {
    console.log(`e11s prismatic: empty images: ${JSON.stringify(images)}`);
    return;
  }
  if (safeZones.length > 1) {
    console.log(`e11s prismatic: too many safe zones: ${JSON.stringify(images)}`);
    return;
  }

  console.log(`e11s prismatic: found safe zone: ${JSON.stringify(safeZones)}`);
  return safeZones[0];
};

Options.Triggers.push({
  zoneId: ZoneId.EdensPromiseAnamorphosisSavage,
  triggers: [
    {
      id: 'E11S Prismatic Deception Collection',
      netRegex: NetRegexes.startsUsing({ source: 'Fatebreaker\'s Image', id: '56A5' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Abbild Des Fusionierten Ascians', id: '56A5' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Double Du Sabreur De Destins', id: '56A5' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'フェイトブレイカーの幻影', id: '56A5' }),
      run: (data, matches) => {
        data.prismaticImageIds = data.prismaticImageIds || [];
        // The three clones actually doing the casting here are all positioned in garbage locations.
        // However, there are three clones with id+1 that are all in the right spot.
        data.prismaticImageIds.push(parseInt(matches.sourceId, 16) + 1);
        console.log(
          `e11s prismatic: ${JSON.stringify(matches)}, ${JSON.stringify(data.prismaticImageIds)}`,
        );
      },
    },
    {
      id: 'E11S Prismatic Deception All-Seeing Eye',
      netRegex: NetRegexes.startsUsing({ source: 'Fatebreaker\'s Image', id: '56A5' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Abbild Des Fusionierten Ascians', id: '56A5' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Double Du Sabreur De Destins', id: '56A5' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'フェイトブレイカーの幻影', id: '56A5' }),
      condition: (data) => data.prismaticImageIds.length === 3,
      durationSeconds: 10,
      promise: async (data) => {
        const imageData = await window.callOverlayHandler({
          call: 'getCombatants',
          ids: data.prismaticImageIds,
        });

        if (imageData === null) {
          console.error('e11s prismatic: null imageData');
          return;
        }
        if (!imageData.combatants) {
          console.error('e11s prismatic: null combatants');
          return;
        }
        if (!imageData.combatants.length) {
          console.error('e11s prismatic: empty combatants');
          return;
        }

        data.images = imageData.combatants;
      },
      alertText: (data, _, output) => {
        delete data.prismaticImageIds;
        if (!data.images)
          return;

        const outputKey = calculatePrismaticSafeZone(data.images);
        console.error('e11s prismatic: ${outputKey}');
        if (outputKey)
          return output[outputKey]();
      },
      outputStrings: {
        dirNS: 'Go N or S',
        dirNESW: 'Go NE or SW',
        dirEW: 'Go E or W',
        dirSENW: 'Go SE or NW',
      },
    },
  ],
});
