Options.Triggers.push({
  zoneId: ZoneId.EdensPromiseAnamorphosis,
  triggers: [
    {
      id: 'P4S Act 2 Fire Healer',
      type: 'Tether',
      netRegex: NetRegexes.tether({ id: '00AC' }),
      condition: (data) => data.act === '2',
      infoText: (data, matches, output) => {
        const id = data.actTwoHeadMarkers[matches.source] ?? data.actTwoHeadMarkers[matches.target];
        const fireId = '012F';
        if (id !== fireId)
          return;

        if (data.party.isHealer(matches.source))
          return output.fireHealer({ player: data.ShortName(matches.source) });

        if (data.party.isHealer(matches.target))
          return output.fireHealer({ player: data.ShortName(matches.target) });
      },
      tts: null,
      sound: null,
      outputStrings: {
        fireHealer: {
          en: 'Fire Healer: ${player}',
        },
      },
    },
  ],
});
