Options.Debug = true;
Options.SpokenAlertsEnabled = false;

Options.PlayerNicks = {
  'Paprika Rika': 'Pap',
  'Elmindreda Farshaw': 'Min',
  'Mikoto Misaka': 'Miko',
  'Lohpopo Lopopo': 'Loh',
  'Ninene Nine': 'Nine',
  'Wikiki Wiki': 'Wiki',
  'Kinono Kino': 'Kino',
};

Options.Triggers = [
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

// Play tts as well as the on screen text.
var playTTS = {
  SpeechAlert: true,
  TextAlert: true,
  SoundAlert: true,
};

// Run regardless of condition.
var alwaysTrueCondition = {
  Condition: function() { return true; },
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
  'General Provoke': alwaysTrueCondition,
  'General Ultimatum': alwaysTrueCondition,
  'General Shirk': alwaysTrueCondition,
  'General Holmgang': alwaysTrueCondition,
  'General Hallowed': alwaysTrueCondition,
  'General Living': alwaysTrueCondition,
  'General Walking': alwaysTrueCondition,
};