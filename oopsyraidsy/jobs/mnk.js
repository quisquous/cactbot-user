Options.Triggers.push({
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'Monk Positional',
      netRegex: NetRegexes.abilityFull({ id: ['38', '42'] }),
      mistake: (data, matches) => {
        const correctFlags = {
          // snap punch
          '38': /^13730...$/,
          //  demolish
          '42': /^2E730...$/,
        };

        if (!correctFlags[matches.id])
          return;
        if (correctFlags[matches.id].test(matches.flags))
          return;

        return {
          type: 'damage',
          blame: matches.source,
          text: {
            en: `${matches.ability} (positional)`,
          },
        };
      },
    },
  ],
});
