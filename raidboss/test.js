console.log('git raidboss user/raidboss/test.js file');

Options.Triggers.push({
  zoneId: ZoneId.MiddleLaNoscea,
  // overrideTimelineFile: true,
  // timelineFile: 'test-timeline.txt',
  timelineTriggers: [
    {
      id: 'Test Timeline Trigger',
      regex: /Angry Dummy II/,
      beforeSeconds: 2,
      infoText: 'BOOP',
    },
  ],
  timelineReplace: [
    {
      locale: 'en',
      replaceText: {
        'Final Sting': 'Finalest Sting',
        'Angry Dummy': 'Mildly Irate Dummy',
      },
    },
  ],
  triggers: [
    {
      id: 'Test Poke',
      netRegex: NetRegexes.gameNameLog({ line: 'You poke the striking dummy.*?', capture: false }),
      preRun: function(data) {
        data.pokes = (data.pokes || 0) + 1;
      },
      // Instead of printing the number of pokes with infoText like the original trigger,
      // This overrides the type and text of the output.
      alarmText: 'POKE (user file override)',
    },
    {
      // no id!
      netRegex: NetRegexes.gameNameLog({ line: 'You poke the striking dummy.*?', capture: false }),
      alarmText: 'POKE EXTRA',
    },
    {
      id: 'Test Poke 3',
      netRegex: NetRegexes.gameNameLog({ line: 'You poke the striking dummy.*?', capture: false }),
      preRun: function(data) {
        data.pokes = (data.pokes || 0) + 1;
      },
      // Instead of printing the number of pokes with infoText like the original trigger,
      // This overrides the type and text of the output.
      alarmText: 'POKE (user file override)',
    },
  ],
});
