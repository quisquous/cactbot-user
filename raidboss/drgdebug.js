Options.Triggers.push({
  zoneId: ZoneId.MiddleLaNoscea,
  triggers: [
    {
      id: 'Dragoon Debug Flags',
      netRegex: NetRegexes.abilityFull({ target: 'Striking Dummy' }),
      condition: (data, matches) => matches.source === data.me && matches.id !== '07',
      infoText: (data, matches) => `${matches.ability}: ${matches.flags}`,
    },
  ],
});
