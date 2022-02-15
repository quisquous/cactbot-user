const huntZones = [
  ZoneId.Lakeland,
  ZoneId.AmhAraeng,
  ZoneId.IlMheg,
  ZoneId.Kholusia,
  ZoneId.TheRaktikaGreatwood,
  ZoneId.TheTempest,
  ZoneId.Labyrinthos,
  ZoneId.Thavnair,
  ZoneId.Garlemald,
  ZoneId.MareLamentorum,
  ZoneId.Elpis,
  ZoneId.UltimaThule,
];

const shoutCode = '000B';

Options.Triggers.push({
  zoneId: huntZones,
  triggers: [
    {
      id: 'Train Navi Mae',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Navi Mae',
        line: 'SPIRIT TR.*LAG DEPARTING.*',
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Specter Saruu',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Specter Saruu',
        line: [
          'Choo Choo! Next stop.*',
          '.*Train is coming to its last stop.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Lucienne Whitebloom',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Lucienne Whitebloom',
        line: [
          'Time to visit our friend at .*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Ouija Wanders',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Ouija Wanders',
        line: [
          'the scoundrel,.*',
          'continues.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Aven Tilsaren',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Aven Tilsaren',
        line: [
          'Next mark spotted!.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Izana Zephyr',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Izana Zephyr(?:Midgardsormr)?',
        line: [
          '.*RELAY.*Hunt Found.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Scavell Tane',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Scavell Tane',
        line: [
          'Next Train stop.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Kiona Maraguld',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Kiona Maraguld',
        line: [
          'Hunt train next stop.*',
          'Next mark spotted!.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Yayo Ouuh',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Yayo Ouuh',
        line: [
          '.*dorable target in need of hard patting.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
  ],
});