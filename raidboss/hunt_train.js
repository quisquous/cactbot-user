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
          'nice A rank ya got there.*'
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
      id: 'Train Nefial Flauros',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Nefial Flauros(?:Faerie)?',
        line: [
          '.*Next Mark at.*',
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
          '.*Train go Choo Choo!.*'
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Emi Azayaka',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Emi Azayaka(?:Siren)?',
        line: [
          // This train is now leaving the station! First stop: Ultima Thule ( 15.9  , 26.0 )
          'This train is now leaving the station.*',
          'Choo choo! Next stop:.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Okii Dokii',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Okii Dokii(?:Sargatanas)?',
        line: [
          'Next stop ->.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Headpats Please',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Headpats Please(?:Sargatanas)?',
        line: [
          'Next stop.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Summer Nights',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Summer Nights(?:Midgardsormr)?',
        line: [
          'Next Stop -.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Lunae Goetia',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Lunae Goetia(?:Jenova)?',
        line: [
          '.*Good hunter, our next mark can be found.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Zel Cheres',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Zel Cheres(?:Cactuar)?',
        line: [
          'next stop -->.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Pand Cake',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Pand Cake(?:Cactuar)?',
        line: [
          '.*Next Stop.*',
          '.*Train final stop.*',
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
    {
      id: 'Train Lulupi Lupi',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Lulupi Lupi(?:Faerie)?',
        line: [
          '.*Choo Choo.*(?:Calling all besties|FINAL STOP).*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
    {
      id: 'Train Iveldar Zheurial',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        name: 'Iveldar Zheurial',
        line: [
          'Next mark ->.*',
        ],
        code: shoutCode,
        capture: false,
      }),
      sound: 'Long',
    },
  ],
});
