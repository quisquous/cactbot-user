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

const conductors = [
  {
    name: 'Navi Mae',
    server: 'Jenova',
    line: [
      'SPIRIT TR.*LAG DEPARTING.*',
    ],
  },
  {
    name: 'Specter Saruu',
    server: 'Jenova',
    line: [
      'Choo Choo! Next stop.*',
      '.*Train is coming to its last stop.*',
    ],
  },
  {
    name: 'Lucienne Whitebloom',
    server: 'Jenova',
    line: [
      'Time to visit our friend at .*',
      'Choo choo! Hunt train\'s.*',
    ],
  },
  {
    name: 'Ouija Wanders',
    server: 'Jenova',
    line: [
      'the scoundrel,.*',
      'continues.*',
      'will this tactless mob.*',
      'nice A rank ya got there.*',
    ],
  },
  {
    name: 'Aven Tilsaren',
    server: 'Jenova',
    line: [
      'Next mark spotted!.*',
    ],
  },
  {
    name: 'Izana Zephyr',
    server: 'Midgardsormr',
    line: [
      '.*RELAY.*Hunt Found.*',
      '.*Rank \\[.*',
    ],
  },
  {
    name: 'Hershy Kist',
    server: 'Faerie',
    line: [
      'Next stop!.*',
    ],
  },
  {
    name: 'Scavell Tane',
    server: 'Jenova',
    line: [
      'Next Train stop.*',
    ],
  },
  {
    name: 'Kiona Maraguld',
    server: 'Jenova',
    line: [
      'Hunt train next stop.*',
      'Next mark spotted!.*',
    ],
  },
  {
    name: 'Yayo Ouuh',
    server: 'Jenova',
    line: [
      '.*dorable target in need of hard patting.*',
    ],
  },
  {
    name: 'Melisandre Stormclaw',
    server: 'Jenova',
    line: [
      'Hunt train next stop:.*',
      'Hunt train last stop.*',
    ],
  },
  {
    name: 'Mekeh\'zi Mhuqopi',
    server: 'Jenova',
    line: [
      'Hunt Train FIRST STOP.*',
      'Hunt Train NEXT STOP.*',
    ],
  },
  {
    name: 'Sun Bun',
    server: 'Jenova',
    line: [
      '.*Train:.*',
    ],
  },
  {
    name: 'Over Haul',
    server: 'Jenova',
    line: [
      'Death looms over our next.*',
    ],
  },
  {
    name: 'John Choco',
    server: 'Jenova',
    line: [
      '.*Hunt Train going to.*',
      '.*Hunt Train Last.*',
    ],
  },
  {
    name: 'Tet Sisma',
    server: 'Jenova',
    line: [
      'This thing\'s still alive.*',
      'It\'s been fun, but this is the last one.*',
    ],
  },
  {
    name: 'Nefial Flauros',
    server: 'Faerie',
    line: [
      '.*Next Mark at.*',
    ],
  },
  {
    name: 'Airenlei Saerel',
    server: ['Siren', 'Sargatanas', 'Cactuar', 'Midgardsormr'],
    line: [
      '.*Choo choo! Next stop.*',
      '.*Train go Choo Choo!.*',
    ],
  },
  {
    name: 'Emi Azayaka',
    server: 'Siren',
    line: [
      'This train is now leaving the station.*',
      'Choo choo! Next stop:.*',
    ],
  },
  {
    name: 'Vashet Saicere',
    server: 'Siren',
    line: [
      '.*Next stop.*',
    ],
  },
  {
    name: 'Okii Dokii',
    server: 'Sargatanas',
    line: [
      'Next stop ->.*',
    ],
  },
  {
    name: 'Headpats Please',
    server: 'Sargatanas',
    line: [
      'Next stop.*',
    ],
  },
  {
    name: 'Summer Nights',
    server: 'Midgardsormr',
    line: [
      'Next Stop -.*',
    ],
  },
  {
    name: 'Lunae Goetia',
    server: 'Jenova',
    line: [
      '.*Good hunter, our next mark can be found.*',
    ],
  },
  {
    name: 'Corri Kazuto',
    server: 'Jenova',
    line: [
      'Next.*',
      // FINAL Stop on the Kazu EXPRESS
      ' Stop on the ',
    ],
  },
  {
    name: 'Kasper Ghost',
    server: 'Cactuar',
    line: [
      '.*Next stop.*',
      'Hunt Train Final Mark',
    ],
  },
  {
    name: 'Zel Cheres',
    server: 'Cactuar',
    line: [
      'next stop -->.*',
    ],
  },
  {
    name: 'Pand Cake',
    server: 'Cactuar',
    line: [
      '.*Next Stop.*',
      '.*Train final stop.*',
    ],
  },
  {
    name: 'Ray Leonhart',
    server: 'Midgardsormr',
    line: [
      '.*A RANK FOUND at.*',
    ],
  },
  {
    name: 'Argo Vecti',
    server: 'Gilgamesh',
    line: [
      '.*Rank.*spotted at.*',
    ],
  },
  {
    name: 'Yuki Yozora',
    server: 'Faerie',
    line: [
      '.*Drippy Train next stop.*',
    ],
  },
  {
    name: 'Bear Esteria',
    server: 'Jenova',
    line: [
      'Next Hunt Mark:.*',
    ],
  },
  {
    name: 'Babby Josuke',
    server: 'Jenova',
    line: [
      'Surely nothing bad is.*',
    ],
  },
  {
    name: 'Osterby Aster',
    server: 'Faerie',
    line: [
      'The train is going here, meow.*',
    ],
  },
  {
    name: 'Lulupi Lupi',
    server: 'Faerie',
    line: [
      '.*Choo Choo.*(?:Calling all besties|FINAL STOP).*',
    ],
  },
  {
    name: 'Iveldar Zheurial',
    server: 'Jenova',
    line: [
      'Next mark ->.*',
    ],
  },
  {
    name: 'Louvain Eventide',
    server: 'Sargatanas',
    line: [
      // A rank HQ
      '  .*',
    ],
  },
  {
    name: 'Arisu Kuma',
    server: 'Jenova',
    line: [
      'Next Train stop at.*',
    ],
  },
  {
    name: 'System Senpai',
    server: 'Halicarnassus',
    line: [
      'NEXT TARGET.*',
    ],
  },
  {
    name: 'Othelia Emeraldsong',
    server: 'Adamantoise',
    line: [
      'First stop>>>>.*',
      '.*Next stop!.*',
    ],
  },
  {
    name: 'Velvet Lalay\'ra',
    server: 'Siren',
    line: [
      'Next stop on the.*',
    ],
  },
];

// TODO: maybe track the last time this was run and suppress??
const generateTrigger = (data) => {
  return {
    id: `Train ${data.name}`,
    type: 'GameLog',
    netRegex: NetRegexes.gameLog({
      name: `${data.name}(?:${Regexes.anyOf(data.server)})?`,
      line: data.line,
      code: shoutCode,
      capture: false,
    }),
    sound: 'Long',
  };
};

Options.Triggers.push({
  zoneId: huntZones,
  triggers: conductors.map((x) => generateTrigger(x)),
});
