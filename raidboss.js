console.log('git raidboss user file');
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

// /echo :Bahamut Prime:26E8: for adds
// /echo :Bahamut Prime:2707: for golden
Options.Triggers = [
  {
    zoneRegex: /(The Unending Coil Of Bahamut \(Ultimate\)|^Mist$)/,
    timeline: [
      '1208 "(conv, shake)"', // Morn Afah #1
      '1214 "(holm)"', // Akh Morn #1
      '1238 "(early veng)"', // Akh Morn #2
      '1264 "(reprisal)"', // Morn Afah #2
      '1297 "(raw shake)"', // Morn Afah #3
      '1309 "(hallow)"', // Akh Morn #3
      '1348 "(conv, reprisal)"', // Morn Afah #4
      '1398 "(shake)"', // Morn Afah #5
      '1412 "(thots n prayers)"', // Enrage
      'alarmtext "Sentence/Ravensbeak" before 10 "PAP USE YOUR BLOODY COOLDOWNS"',
      'infotext "Morn Afah #1" before 10 "conv, shake"',
      'infotext "Morn Afah #2" before 8 "reprisal"',
      'infotext "Morn Afah #3" before 8 "raw shake"',
      'infotext "Morn Afah #4" before 8 "conv, reprisal"',
      'infotext "Morn Afah #5" before 8 "shake"',
    ],
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
