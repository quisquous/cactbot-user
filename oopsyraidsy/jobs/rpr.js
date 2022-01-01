Options.Triggers.push({
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'Reaper Positional',
      netRegex: NetRegexes.abilityFull({ id: ['5F3F', '5F3E'] }),
      mistake: (data, matches) => {
        const correctFlags = {
          // gallows
          '5F3F': /^[BD]710...$/,
          //  gibbet
          '5F3E': /^[BD]710...$/,
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
