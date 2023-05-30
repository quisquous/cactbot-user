// console.log('git raidboss user file');
// Options.Debug = true;
// console.log('Language set to ' + Options.Language);
// Options.SpokenAlertsEnabled = false;
// Options.Skin = 'lippe';
Options.cactbotWormholeStrat = true;

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
  'Women\'s Champion': 'Kev',
  'Fire Five': 'Kev',
  'Skill Issue': 'Kev',
  'Shisui Miwa': 'Derp',
  'Goshu Tsukinoe': 'goshu',
  'Goshu Banhi': 'goshu',
  'Hoochi Coochie': 'Kev',
  'Heal Er': 'Glory',
  'Phoebe Blu': 'Kev',
  'Leshwi Shanay-im': 'Min',
  'Wind-up Mizzen': 'Mizzen',
  'Jujube Jube': 'Pap',
};

// Prepend emoji to all added timeline events to make them stand out.
function emojify(arr) {
  const emojo = '👋';
  const search = Regexes.parse(/^\s*(\y{Float})\s+"\s*(?!-)/);
  for (let i = 0; i < arr.length; ++i)
    arr[i] = arr[i].replace(search, '$1 " ' + emojo + ' ');
  return arr;
}

Options.Triggers.push(
  ...[
    {
      zoneRegex: /.*/,
      filename: 'user global',
      triggers: [
        {
          id: 'Suicide Is Painless',
          disabled: true,
          netRegex: NetRegexes.wasDefeated({ targetId: '1.*?', sourceId: '00' }),
          infoText: function(data, matches) {
            console.log(JSON.stringify(matches));
            return 'TEST: ' + matches.target;
          },
        },
        {
          /* eslint-disable max-len */
          // [6/23/2020 6:57:07 PM] Info: raidbossy: BrowserConsole: CB01|2020-06-23T18:57:12.3510000-07:00|400063E7|Nael Deus Darnus|7D8|Iron Chariot|400063E7|Nael Deus Darnus|2.20||X|Y|Z|heading|647cb90332a59100625777855ef0d638 (Source: , Line: 11)
          // [6/23/2020 6:57:07 PM] Info: raidbossy: BrowserConsole: 20|2020-06-23T18:57:12.3510000-07:00|400063E7|Nael Deus Darnus|7D8|Iron Chariot|400063E7|Nael Deus Darnus|2.20||647cb90332a59100625777855ef0d638 (Source: , Line: 18)
          /* eslint-enable */
          id: 'test overlayplugin',
          disabled: true,
          netRegex: /(?<line>^CB01.*$)/,
          run: function(data, matches) {
            console.log(matches.line);
          },
        },
        {
          id: 'VFX Funtimes',
          // eslint-disable-next-line max-len
          // 252|2021-03-20T11:19:04.9210000-07:00|00000038|400005F5|10686258|00000003|00C20014|0B1F0000|60563C98|00000000|E0000015|00000808|000000E1|E0000000|00000000|00000000||c0d981f91816e317d4e05a734b44ab75
          netRegex: NetRegexes.gainsEffect({ effectId: '808' }),
          disabled: true,
          infoText: (data, matches) => `(${matches.target}: ${matches.count})`,
          sound: null,
          tts: null,
          run: (data, matches) => {
            console.log(`(${matches.target}: ${matches.count})`);
          },
        },
      ],
    },
    {
      zoneId: ZoneId.MiddleLaNoscea,
      triggers: [
        {
          id: 'Test Lang',
          netRegex: NetRegexes.echo({ line: 'cactbot lang.*?', capture: false }),
          infoText: (data, _, output) => {
            return output.text({ parserLang: data.parserLang });
          },
          outputStrings: {
            text: {
              en: 'Language2: ${parserLang}',
            },
          },
        },
        {
          id: 'Test Lang',
          regex: Regexes.echo({ line: 'boop1.*?', capture: false }),
          infoText: (data, _, output) => {
            return output.text({ parserLang: data.parserLang });
          },
          outputStrings: {
            text: {
              en: 'Language3: ${parserLang}',
            },
          },
        },
        {
          id: 'Test Boop 2',
          regex: Regexes.echo({ line: 'boop2.*?', capture: false }),
          promise: async (data) => {
            const combatants1 = await callOverlayHandler({
              call: 'getCombatants',
            });
            const combatants2 = await window.callOverlayHandler({
              call: 'getCombatants',
            });
            const names1 = combatants1.combatants.map((c) => c.Name);
            const names2 = combatants2.combatants.map((c) => c.Name);
            console.log(`names1: ${JSON.stringify(names1)}`);
            console.log(`names2: ${JSON.stringify(names2)}`);
          },
        },
      ],
    },
    {
      // /echo :Bahamut Prime:26E8: for adds
      // /echo :Bahamut Prime:2707: for golden
      zoneRegex: /The Unending Coil Of Bahamut \(Ultimate\)/,
      filename: 'user ucob',
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
      filename: 'user uwu',
      timeline: ['alarmtext "Dark IV" after 1 "USE THE BLOODY TANK LB!"'],
    },
    {
      zoneRegex: {
        en: /The Second Coil Of Bahamut - Turn \(2\)/,
      },
      filename: 'user t7',
      triggers: [
        {
          id: 'T7 Voice',
          regex: /1A:(\y{Name}) gains the effect of Cursed Voice from {2}for (\y{Float}) Seconds/,
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
            return data.voices && Object.keys(data.voices).length === 3;
          },
          infoText: function(data) {
            if (!data.voices)
              return;

            // Never freeze.
            const neverPerson = 'Paprika Rika';
            // Always freeze first.
            const priorityPerson = 'Ryythe Larke';
            // Prefer not this person, unless the next best person has a short time.
            const preferPerson = 'Elmindreda Far\'shaw';
            const minPreferSeconds = 6;

            delete data.voices[neverPerson];
            let order = [];

            if (priorityPerson in data.voices) {
              delete data.voices[priorityPerson];
              order.push(priorityPerson);
            }

            const preferPersonTime = data.voices[preferPerson];
            delete data.voices[preferPerson];

            const sortedVoices = Object.keys(data.voices).sort((a, b) => {
              return data.voices[b] - data.voices[a];
            });

            order = order.concat(sortedVoices);
            if (preferPersonTime) {
              const bestTime = data.voices[order[0]];
              if (
                bestTime < minPreferSeconds &&
                order[0] !== priorityPerson &&
                preferPersonTime > bestTime
              )
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
    {
      zoneRegex: /^Eden's Gate: Resurrection \(Savage\)$/,
      filename: 'user e1s',
      timeline: function(data) {
        if (data.job !== 'DRK')
          return;
        return emojify([
          '1 "Remember Early Rampart"',
          '5 "Reprisal"',
          '36 "Missionary"',
          '51 "Living"',
          '65 "Reprisal"',
          '139 "Missionary"',
          '141 "Reprisal"',
          '520 "Missionary"',
          '550 "Reprisal"',
          '616 "Missionary"',
          '626 "Reprisal"',
          '670 "Living"',
          '723 "Reprisal"',
          'hideall "--hold--"',
          '612 "--hold--"',
          'alarmtext "--hold--" before 0 "PAP HOLD YOUR BLOODY COOLDOWNS"',
        ]);
      },
    },
    {
      zoneRegex: /^Eden's Gate: Descent \(Savage\)$/,
      filename: 'user e2s',
      timeline: function(data) {
        if (data.job !== 'DRK')
          return;
        return emojify([
          '26 "Reprisal"',
          '29 "Missionary"',
          '102 "Reprisal"',
          '107 "Missionary"',
          '221 "Reprisal"',
          '246 "Missionary"',
          '290 "Spare Reprisal"',
          '372 "Missionary"',
        ]);
      },
    },
    {
      zoneRegex: /^Eden's Gate: Inundation \(Savage\)$/,
      filename: 'user e3s',
      timeline: function(data) {
        if (data.job !== 'DRK')
          return;
        return emojify([
          '3 "Missionary"',
          '23 "goshu hallowed"',
          '50 "Reprisal?"',
          'hideall "--hold--"',
          '104 "--hold--"',
          'alarmtext "--hold--" before 0 "PAP HOLD YOUR BLOODY COOLDOWNS"',
          '125 "Reprisal"',
          '145 "Missionary"',
          '155 "Provoke"',
          '167 "Living"',
          '195 "Reprisal"',
          '235 "Missionary"',
          '310 "rampart"',
          '312 "Reprisal"',
          '314 "shadow wall"',
          '337.5 "Missionary"',
          '418 "Reprisal"',
          '427 "Missionary"',
          '475 "Provoke"',
          '489 "Reprisal"',
          '490 "Living"',
          '513 "Missionary"',
        ]);
      },
    },
    {
      zoneRegex: /^Eden's Gate: Sepulture \(Savage\)$/,
      filename: 'user e4s',
      timeline: function(data) {
        if (data.job !== 'DRK')
          return;
        return emojify([
          '10 "Living"',
          '35 "Missionary"',
          '40 "dark mind"',
          '50 "Reprisal"',
          '330 "Missionary"',
          '340 "Reprisal"',
          '630 "Missionary"',
          '662 "Reprisal"',
          '715 "TBN Goshu"',
          'alarmtext "TBN Goshu" before 5 "SAVE GOSHU"',
          '1020 "Missionary"',
          '1052 "rampart"',
          '1056 "dark mind"',
          '1056 "shadow wall"',
          '1067 "Reprisal"',
          '1171 "Missionary"',
          '1179 "Reprisal"',
          '1285 "rampart"',
          '1292 "dark mind"',
          '1283.5 "Missionary"',
          '1290 "Reprisal"',
          '1315 "provoke"',
          '1317 "Living"',
          '1370 "Reprisal"',
          '1403 "shadow wall"',
          '1410 "Missionary"',
          '1415 "dark mind"',
          '1433 "Reprisal"',
          '1480 "rampart"',
        ]);
      },
    },
  ],
);

// Play tts as well as the on screen text.
const playTTS = {
  SpeechAlert: true,
  TextAlert: true,
  SoundAlert: true,
};

// Run regardless of condition.
const alwaysTrueCondition = {
  Condition: function(data, matches) {
    if (matches.source !== data.me && !data.party.inAlliance(matches.source))
      return false;
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

Object.assign(Options.PerTriggerOptions, {
  'Test Poke': {
    SpeechAlert: true,
    TTSText: function(data) {
      console.log('boop');
      return data.pokes;
    },
  },
});

// Here's an example of a adding a custom regen trigger.
// It reminds you to use regen again when you are in Sastasha (unsynced).
Options.Triggers.push({
  // The zone this should apply to.
  // This should match the zoneId in the triggers file.
  zoneId: ZoneId.Sastasha,
  triggers: [
    // A more complicated regen trigger.
    {
      // This is a made up id.
      id: 'User Example Regen',
      // This will match log lines from ACT that look like this:
      // "Nacho Queen gains the effect of Regen from Taco Cat for 21.00 Seconds."
      regex: Regexes.gainsEffect({ effect: 'Regen' }),
      delaySeconds: function(data, matches) {
        // Wait the amount of seconds regen lasts before reminding you to
        // reapply it.  This is not smart enough to figure out if you
        // cast it twice, and is left as an exercise for the reader to
        // figure out how to do so via storing variables on `data`.
        return data.ParseLocaleFloat(matches.duration);
      },
      alertText: 'Regen',
    },
  ],
});
