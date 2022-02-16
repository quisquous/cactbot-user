const matchesToDir = (m, data) => {
  const centerX = 100;
  const centerY = 100;

  const thorn = data.actFourThorns[m.sourceId];
  if (!thorn) {
    console.error(`Act 4 Thorn: missing ${m.sourceId}: ${JSON.stringify(data.actFourThorns)}`);
    return;
  }

  const x = thorn.PosX - centerX;
  const y = thorn.PosY - centerY;
  // Dirs: N = 0, NE = 1, ..., NW = 7
  return Math.round(4 - 4 * Math.atan2(x, y) / Math.PI) % 8;
};

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFourthCircleSavage,
  triggers: [
    {
      id: 'P4S Act 4 Tether Collector',
      type: 'Tether',
      netRegex: NetRegexes.tether({ id: '00A[CD]', source: 'Hesperos' }),
      condition: (data) => data.act === '4',
      run: (data, matches) => {
        if (!data.actFourTethers)
          data.actFourTethers = [];
        data.actFourTethers.push(matches);
      },
    },
    {
      id: 'P4S Act 4 Color Tether',
      type: 'Tether',
      // Tether comes after the headmarker color.
      netRegex: NetRegexes.tether({ id: '00A[CD]', source: 'Hesperos' }),
      netRegexDe: NetRegexes.tether({ id: '00A[CD]', source: 'Hesperos' }),
      netRegexFr: NetRegexes.tether({ id: '00A[CD]', source: 'Hespéros' }),
      netRegexJa: NetRegexes.tether({ id: '00A[CD]', source: 'ヘスペロス' }),
      condition: (data, matches) => data.act === '4' && matches.target === data.me,
      durationSeconds: (data, matches) => data.actHeadmarkers[matches.target] === '012D' ? 12 : 9,
      suppressSeconds: 9999,
      promise: async (data, matches) => {
        const result = await callOverlayHandler({
          call: 'getCombatants',
          ids: [parseInt(matches.sourceId, 16)],
        });
        const myThorn = result.combatants[0];
        if (!myThorn) {
          console.error(`Act 4 Tether: null data`);
          return;
        }

        data.actFourThorn = myThorn;
      },
      response: (data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          blueTether: {
            en: 'Blue Tether',
            de: 'Blaue Verbindung',
            fr: 'Lien bleu',
            cn: '蓝标连线',
          },
          purpleTether: {
            en: 'Purple Tether',
            de: 'Lila Verbindung',
            fr: 'lien violet',
            cn: '紫标连线',
          },
          blueTetherDir: {
            en: 'Blue ${marker} -> ${dir}',
          },
          purpleTetherDir: {
            en: 'Purple ${marker} -> ${dir}',
          },
          dirN: Outputs.dirN,
          dirNE: Outputs.dirNE,
          dirE: Outputs.dirE,
          dirSE: Outputs.dirSE,
          dirS: Outputs.dirS,
          dirSW: Outputs.dirSW,
          dirW: Outputs.dirW,
          dirNW: Outputs.dirNW,
          markerA: {
            en: 'A',
          },
          marker1: {
            en: '1',
          },
          markerB: {
            en: 'B',
          },
          marker2: {
            en: '2',
          },
          markerC: {
            en: 'C',
          },
          marker3: {
            en: '3',
          },
          markerD: {
            en: 'D',
          },
          marker4: {
            en: '4',
          },
          unknown: Outputs.unknown,
        };

        const id = data.actHeadmarkers[matches.target];
        if (id === undefined) {
          console.error(`Act 2 Tether: missing headmarker: ${JSON.stringify(data.actHeadmarkers)}`);
          return;
        }

        const isBlue = id === '012C';
        if (data.actFourThorn === undefined) {
          if (isBlue)
            return { infoText: output.blueTether() };
          return { alertText: output.purpleTether() };
        }

        const centerX = 100;
        const centerY = 100;
        const x = data.actFourThorn.PosX - centerX;
        const y = data.actFourThorn.PosY - centerY;
        // Dirs: N = 0, NE = 1, ..., NW = 7
        const thornDir = Math.round(4 - 4 * Math.atan2(x, y) / Math.PI) % 8;

        const thornStr = {
          0: output.markerA(),
          1: output.marker1(),
          2: output.markerB(),
          3: output.marker2(),
          4: output.markerC(),
          5: output.marker3(),
          6: output.markerD(),
          7: output.marker4(),
        }[thornDir] ?? output.unknown();

        const rotate = isBlue ? 3 : 1;
        const finalStr = {
          0: output.dirN(),
          1: output.dirNE(),
          2: output.dirE(),
          3: output.dirSE(),
          4: output.dirS(),
          5: output.dirSW(),
          6: output.dirW(),
          7: output.dirNW(),
        }[(thornDir + rotate) % 8] ?? output.unknown();

        if (isBlue)
          return { infoText: output.blueTetherDir({ marker: thornStr, dir: finalStr }) };
        if (thornDir === 0 || thornDir === 1)
          return { alarmText: output.purpleTetherDir({ marker: thornStr, dir: finalStr }) };
        return { alertText: output.purpleTetherDir({ marker: thornStr, dir: finalStr }) };
      },
    },
    {
      id: 'P4S Act 4 Thorn Collector',
      type: 'Tether',
      netRegex: NetRegexes.tether({ id: '00A[CD]', source: 'Hesperos' }),
      condition: (data) => data.act === '4',
      delaySeconds: 8,
      durationSeconds: 10,
      suppressSeconds: 9999,
      promise: async (data) => {
        if (!data.actFourTethers) {
          console.error('Act 4 Tethers: no tethers??');
          return;
        }

        const ids = data.actFourTethers.map((m) => parseInt(m.sourceId, 16));
        const result = await callOverlayHandler({
          call: 'getCombatants',
          ids: ids,
        });

        if (!result || !result.combatants || result.combatants.length !== ids.length) {
          console.error(`Act 4 Tether: combatant error: ${JSON.stringify([result, ids])};`);
          return;
        }

        data.actFourThorns = {};
        for (const c of result.combatants)
          data.actFourThorns[c.ID.toString(16).toUpperCase().padStart(8, '0')] = c;
      },
      infoText: (data, _matches, output) => {
        if (!data.actFourThorns)
          return;

        const purple = '012D';
        const tethers = data.actFourTethers.filter((m) => data.actHeadmarkers[m.target] === purple);

        const firstTether = tethers[0];
        if (firstTether === undefined) {
          console.error(`Act 4 Tether: purple filter: ${JSON.stringify(data.actFourTethers)}`);
          return;
        }

        const firstDir = matchesToDir(firstTether, data);
        if (firstDir === undefined) {
          console.error(`Act 4 Tether: first dir: ${JSON.stringify(data.actFourTethers)}`);
          return;
        }

        const isCardinal = (firstDir % 2 === 0);

        const dirToName = {};
        for (const tether of tethers) {
          const dir = matchesToDir(tether, data);
          if (dir === undefined)
            continue;
          dirToName[dir] = tether.target;
        }

        const player1 = dirToName[0] ?? dirToName[1] ?? output.unknown();
        const player2 = dirToName[2] ?? dirToName[3] ?? output.unknown();
        const player3 = dirToName[4] ?? dirToName[5] ?? output.unknown();
        const player4 = dirToName[6] ?? dirToName[7] ?? output.unknown();

        // TODO: individual calls?
        data.actFourTetherOrder = [player1, player2, player3, player4];

        const safeDir = isCardinal ? output.dirSW() : output.dirW();
        return output.text({
          dir: safeDir,
          player1: data.ShortName(player1),
          player2: data.ShortName(player2),
          player3: data.ShortName(player3),
          player4: data.ShortName(player4),
        });
      },
      tts: null,
      sound: null,
      outputStrings: {
        text: {
          en: '${dir}: ${player1} > ${player2} > ${player3} > ${player4}',
        },
        dirW: Outputs.dirW,
        dirSW: Outputs.dirSW,
        unknown: Outputs.unknown,
      },
    },
  ],
});
