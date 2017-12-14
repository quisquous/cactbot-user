Options.Debug = true;
Options.SpokenAlertsEnabled = false;

Options.Triggers = [
  {
    zoneRegex: /.*/,
    triggers: [
      {
        id: 'Provoke',
        regex: /:(\y{Name}):1D6D:Provoke:/,
        infoText: function(data, matches) {
          return 'Provoke: ' + matches[1];
        },
      },
      {
        id: 'Ultimatum',
        regex: /:(\y{Name}):1D73:Ultimatum:/,
        infoText: function(data, matches) {
          return 'Ultimatum: ' + matches[1];
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
  },
];

var playTTS = {
  SpeechAlert: true,
  TextAlert: true,
  SoundAlert: true,
};

Options.PerTriggerOptions = {
  'O4S2 Flood of Naught: Inside': playTTS,
  'O4S2 Flood of Naught: Outside': playTTS,
  'O4S2 Flood of Naught: Colors Purple Blue': playTTS,
  'O4S2 Flood of Naught: Colors Blue Purple': playTTS,
  'UCU Nael Quote 1': playTTS,
  'UCU Nael Quote 2': playTTS,
  'UCU Nael Quote 3': playTTS,
  'UCU Nael Quote 4': playTTS,
  'UCU Nael Quote 5': playTTS,
  'UCU Nael Quote 6': playTTS,
  'UCU Nael Quote 7': playTTS,
  'UCU Nael Quote 8': playTTS,
  'UCU Nael Quote 9': playTTS,
  'UCU Nael Quote 10': playTTS,
  'UCU Nael Quote 11': playTTS,
  'UCU Nael Quote 12': playTTS,
  'UCU Nael Quote 13': playTTS,
  'UCU Nael Quote 14': playTTS,
};
