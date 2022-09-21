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
          'will this tactless mob.*',
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
          '.*Rank \\[.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Hershy Kist',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Hershy Kist(?:Faerie)?',
        line: [
          'Next stop!.*',
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
    {
      id: 'Train Melisandre Stormclaw',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Melisandre Stormclaw',
        line: [
          'Hunt train next stop:.*',
          'Hunt train last stop.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Mekeh\'zi Mhuqopi',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Mekeh\'zi Mhuqopi',
        line: [
          'Hunt Train FIRST STOP.*',
          'Hunt Train NEXT STOP.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Sun Bun',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Sun Bun',
        line: [
          '.*Train:.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Over Haul',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Over Haul',
        line: [
          'Death looms over our next.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train John Choco',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'John Choco',
        line: [
          '.*Hunt Train going to.*',
          '.*Hunt Train Last.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Tet Sisma',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Tet Sisma',
        line: [
          'This thing\'s still alive.*',
          'It\'s been fun, but this is the last one.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Airenlei Saerel',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Airenlei Saerel(?:Siren|Sargatanas)?',
        line: [
          '.*Choo choo! Next stop.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Ray Leonhart',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Ray Leonhart(?:Midgardsormr)?',
        line: [
          '.*A RANK FOUND at.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Argo Vecti',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Argo Vecti(?:Gilgamesh)?',
        line: [
          '.*Rank.*spotted at.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Yuki Yozora',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Yuki Yozora(?:Faerie)?',
        line: [
          '.*Drippy Train next stop.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Bear Esteria',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Bear Esteria',
        line: [
          'Next Hunt Mark:.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Babby Josuke',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Babby Josuke',
        line: [
          'Surely nothing bad is.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Osterby Aster',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Osterby Aster(?:Faerie)?',
        line: [
          'The train is going here, meow.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
  ],
});
