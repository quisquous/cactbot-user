Options.Timelines.push({
  zoneRegex: /^Mist$/,
  timeline: `
    1    "Start of test"    sync /:cactbot test/
    6    "Blizzard III"
    12 "Dualcast"
    28 "Thunder III"
    34 "Death"
    infotext "Blizzard III" before 2 "Blizzard III soon"
    infotext "Imminent Death" before 1 "Death"
  `,
});

Options.Triggers = [
  {
    zoneRegex: /./,
    triggers: [
      {
	id: 'Provoke',
	regex: /:(\y{Name}):1D6D:Provoke:/,
	infoText: function(data, matches) {
	  return 'Provoke: ' + matches[1];
	},
      },
      {
	id: 'Shirk',
	regex: /:(\y{Name}):1D71:Shirk:/,
	infoText: function(data, matches) {
	  return 'Shirk: ' + matches[1];
	},
      },
      {
	id: 'Holmgang',
	regex: /:(\y{Name}):2B:Holmgang:/,
	infoText: function(data, matches) {
	  return 'Holmgang: ' + matches[1];
	},
      },
      {
	id: 'Hallowed',
	regex: /:(\y{Name}):1E:Hallowed Ground:/,
	infoText: function(data, matches) {
	  return 'Hallowed: ' + matches[1];
	},
      },
      {
	id: 'Living',
	regex: /:(\y{Name}):E36:Living Dead:/,
	infoText: function(data, matches) {
	  return 'Living: ' + matches[1];
	},
      },
      {
	id: 'Walking',
	regex: /:(\y{Name}) gains the effect of Walking Dead/,
	infoText: function(data, matches) {
	  return 'Walking: ' + matches[1];
	},
      },
    ]
  },
];

Options.InfoSound = '../../resources/sounds/WeakAuras/RobotBlip.ogg';
Options.InfoSoundVolume = 0.5;
Options.Debug = true;