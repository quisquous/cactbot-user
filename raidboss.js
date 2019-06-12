'use strict';

console.log('git raidboss user file');
Options.Debug = true;
console.log('Language set to ' + Options.Language);

Options.PlayerNicks = {
  'Paprika Rika': 'Pap',
  'Elmindreda Farshaw': 'Min',
  'Elmindreda Far\'shaw': 'Min',
  'Mikoto Misaka': 'Miko',
  'Lohpopo Lopopo': 'Loh',
  'Ninene Nine': 'Nine',
  'Wikiki Wiki': 'Wiki',
  'Kinono Kino': 'Kino',
  'The\'man The\'Myth': 'Zero',
  'Sanjuro Katsuki': 'San',
  'Alshiana Valtarios': 'Alshi',
  'Cheesygordita Crunch': 'Cheesy',
  'Tsukiya Tamada': 'Tsuki',
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
  {
    zoneRegex: /^The Weapon's Refrain \(Ultimate\)$/,
    timeline: [
      'alarmtext "Dark IV" after 1 "USE THE BLOODY TANK LB!"',
    ],
  },
  {
    zoneRegex: /The Second Coil Of Bahamut - Turn \(2\)/,
    triggers: [
      {
        id: 'T7 Voice',
        regex: /1A:(\y{Name}) gains the effect of Cursed Voice from  for (\y{Float}) Seconds/,
        run: function(data, matches) {
          data.voices = data.voices || {};
          data.voices[matches[1]] = matches[2];
        },
      },
      {
        id: 'T7 Voice Got Three',
        regex: /1A:\y{Name} gains the effect of Cursed Voice/,
        condition: function(data) {
          // In case log lines get dropped wait a little and go anyway.
          return data.voices && Object.keys(data.voices).length == 3;
        },
        infoText: function(data) {
          if (!data.voices)
            return;

          // Never freeze.
          let neverPerson = 'Paprika Rika';
          // Always freeze first.
          let priorityPerson = 'Ryythe Larke';
          // Prefer not this person, unless the next best person has a short time.
          let preferPerson = 'Elmindreda Far\'shaw';
          let minPreferSeconds = 6;

          delete data.voices[neverPerson];
          let order = [];

          if (priorityPerson in data.voices) {
            delete data.voices[priorityPerson];
            order.push(priorityPerson);
          }

          let preferPersonTime = data.voices[preferPerson];
          delete data.voices[preferPerson];

          let sortedVoices = Object.keys(data.voices).sort(function(a, b) {
            return data.voices[b] - data.voices[a];
          });

          order = order.concat(sortedVoices);
          if (preferPersonTime) {
            let bestTime = data.voices[order[0]];
            if (bestTime < minPreferSeconds && order[0] != priorityPerson &&
                preferPersonTime > bestTime)
              order.unshift(preferPerson);
            else
              order.push(preferPerson);
          }

          delete data.voices;

          return 'Freeze: ' + order.map(data.ShortName).join(', ');
        },
      },
      {
        id: 'T7 Voice Cleanup',
        regex: /1A:\y{Name} gains the effect of Cursed Voice/,
        suppressSeconds: 10,
        delaySeconds: 5,
        run: function(data) {
          delete data.voices;
        },
      },
    ],
  },
];

// Play tts as well as the on screen text.
let playTTS = {
  SpeechAlert: true,
  TextAlert: true,
  SoundAlert: true,
};

// Run regardless of condition.
let alwaysTrueCondition = {
  Condition: function() {
    return true;
  },
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
