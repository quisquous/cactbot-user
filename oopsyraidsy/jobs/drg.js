Options.Triggers.push({
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'Dragoon Positional',
      netRegex: NetRegexes.abilityFull({ id: ['64AC', 'DE2', 'DE4'] }),
      mistake: (data, matches) => {
        const correctFlags = {
          // 4th Combo
          'DE2': /^[AD]720...$/,
          // 5th Combo
          'DE4': /^[AD]720...$/,
          // Chaotic Spring
          '64AC': /^40720...$/,
        };

        if (!correctFlags[matches.id])
          return;
        if (correctFlags[matches.id].test(matches.flags))
          return;

        // Special case for Chaotic Spring.
        if (matches.id === '64AC') {
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
