console.log('git raidboss user/raidboss/test.js file');

Options.Triggers.push({
  zoneId: ZoneId.MiddleLaNoscea,
  overrideTimelineFile: true,
  timelineFile: 'test-override.txt',
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
  ],
});
