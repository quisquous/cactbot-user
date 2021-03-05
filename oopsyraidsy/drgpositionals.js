Options.Triggers.push({
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'Dragoon Positional',
      netRegex: NetRegexes.abilityFull({ id: ['58', 'DE2', 'DE4'] }),
      // condition: (e, data, matches) => data.me === matches.source,
      mistake: (e, data, matches) => {
        const correctFlags = {
          // Fang And Claw
          'DE2': /^[8A]720...$/,
          // Wheeling Thrust
          'DE4': /^[8A]720...$/,
          // Chaos Thrust
          '58': /^45720...$/,
        };

        if (!correctFlags[matches.id])
          return;
        if (correctFlags[matches.id].test(matches.flags))
          return;

        // Special case for Chaos Thrust.
        if (matches.id === '58') {
          // correct positional && bad combo || bad positional && bad combo
          if (/^1C720...$/.test(matches.flags) || /^720...$/.test(matches.flags)) {
            return {
              type: 'damage',
              blame: matches.source,
              text: {
                en: `${matches.ability} (no combo)`,
              },
            };
          }
        }

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
