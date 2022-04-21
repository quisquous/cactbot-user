Options.Triggers.push({
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'Monk Positional',
      netRegex: NetRegexes.abilityFull({ id: ['38', '42'] }),
      mistake: (data, matches) => {
        const correctFlags = {
          // snap punch
          '38': /^1373....$/,
          //  demolish
          '42': /^2E73....$/,
        };

        if (!correctFlags[matches.id])
          return;
        if (correctFlags[matches.id].test(matches.flags))
          return;

        return {
          type: 'damage',
          blame: matches.source,
          reportId: matches.sourceId,
          text: {
            en: `${matches.ability} (positional)`,
          },
        };
      },
    },
  ],
});
