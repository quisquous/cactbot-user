Options.Triggers.push({
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      // 1D3A = Kasha (flank)
      // 1D39 = Gekko (rear)
      id: 'Samurai Positional',
      netRegex: NetRegexes.abilityFull({ id: '1D3[A9]' }),
      mistake: (data, matches) => {
        if (/^4471.{4}$/.test(matches.flags))
          return;
        if (/^3F71.{4}$/.test(matches.flags)) {
          return {
            type: 'damage',
            blame: matches.source,
            reportId: matches.sourceId,
            text: {
              en: `${matches.ability} (positional)`,
            },
          };
        }

        return {
          type: 'damage',
          blame: matches.source,
          text: {
            en: `${matches.ability} (no combo)`,
          },
        };
      },
    },
  ],
});
