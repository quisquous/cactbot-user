Options.Triggers.push({
  zoneId: ZoneId.DragonsongsRepriseUltimate,
  triggers: [
    {
      id: 'DSR Dive From Grace Dir Group',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: ['AC3', 'AC4', 'AC5'], capture: false }),
      delaySeconds: 0.5,
      durationSeconds: 5,
      suppressSeconds: 1,
      infoText: (data, _matches, output) => {
        const dir1 = data.diveFromGraceHasArrow[1] ? output.arrows() : output.circles();
        const dir2 = data.diveFromGraceHasArrow[2] ? output.arrows() : output.circles();
        const dir3 = data.diveFromGraceHasArrow[3] ? output.arrows() : output.circles();
        return output.text({ dir1, dir2, dir3 });
      },
      outputStrings: {
        circles: {
          en: 'circles',
        },
        arrows: {
          en: 'arrows',
        },
        text: {
          en: '1 ${dir1}, 2 ${dir2}, 3 ${dir3}',
        },
      },
    },
  ],
});
