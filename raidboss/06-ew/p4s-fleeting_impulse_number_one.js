Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFourthCircleSavage,
  triggers: [
    {
      id: 'P4S Fleeting Impulse Number One',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '6A1C', source: 'Hesperos' }),
      netRegexDe: NetRegexes.ability({ id: '6A1C', source: 'Hesperos' }),
      netRegexFr: NetRegexes.ability({ id: '6A1C', source: 'Hespéros' }),
      netRegexJa: NetRegexes.ability({ id: '6A1C', source: 'ヘスペロス' }),
      condition: (data) => data.fleetingImpulseCounter === 1,
      durationSeconds: 5,
      infoText: (data, matches, output) => {
        return output.text({ player: data.ShortName(matches.target) });
      },
      tts: null,
      sound: null,
      outputStrings: {
        text: {
          en: '(${player} #1)',
        },
      },
    },
  ],
});
