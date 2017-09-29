Options.Timelines.push({
  zoneRegex: /^Mist$/,
  timeline: `
    0    "Start of test"    sync /:cactbot test/
    6    "Blizzard III" sync /:cactbot sync/ window 20,20
    10 "Dualcast"
    15 "Thunder III"
    20 "Death"
    infotext "Blizzard III" before 2 "info blizzard"
    alerttext "Dualcast" before 2 "alert dualcast"
    alarmtext "Death" before 2 "alarm death"
  `,
});

Options.Timelines.push({
  zoneRegex: /^(Deltascape V2.0 \(Savage\)|Unknown Zone \(2B8\))$/,
  timeline: `
    49.0 "(pap reprisal)"
    73.0 "(pap veng + conv + ramp)"
    88.0 "(mat reprisal)"
    143.0 "(mat hallow + reprisal)"
    185.0 "(pap reprisal + ramp)"
    243.0 "(mat reprisal)"
    255.0 "(pap ramp + reprisal)"
    371.0 "(pap reprisal)"
    381.0 "(pap veng + conv + ramp)"
    391.0 "(mat reprisal)"
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
  {
    zoneRegex: /(Deltascape V3.0 \(Savage\)|Unknown Zone \(2B9\))/,
    triggers: [
      {
        // Supplement the o3s triggers by saying who the stack is on.
        id: 'O3S Spellblade Holy Info',
        regex: /1B:........:(\y{Name}):....:....:006[45]:0000:0000:0000:/,
        infoText: function(data) {
          if (data.holyTargetsDebug[1] == data.me)
            return;
          for (var i = 0; i < 4; ++i) {
            if (data.holyTargetsDebug[i] == data.me)
              return "others stack on " + data.holyTargetsDebug[1];
          }
        },
        condition: function(data, matches) {
          data.holyTargetsDebug = data.holyTargetsDebug || [];
          data.holyTargetsDebug.push(matches[1]);
          return data.holyTargetsDebug.length == 4;
        },
        run: function(data) {
          delete data.holyTargetsDebug;
        }
      },
    ],
  },
];

Options.Debug = true;
