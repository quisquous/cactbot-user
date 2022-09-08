Options.Triggers.push({
  zoneId: ZoneId.AbyssosTheEighthCircleSavage,
  filename: 'user p8s',
  timeline: (data) => {
    if (data.job !== 'DRK')
      return;
    return mitMapToTimeline({
      5016: ['reprisal', 'missionary'],
      5027.2: ['rampart', 'oblation', 'living dead'],
      5091.7: 'reprisal',
      5094.8: 'reprisal',
      5106.9: ['rampart', 'shadow wall', 'oblation'],
      5118.6: 'missionary',
      5177.1: 'reprisal',
      5180.1: ['oblation', 'tbn'],
      5226.3: ['missionary', 'rampart', 'oblation'],
      5308.0: 'reprisal',
      5320.2: ['rampart', 'shadow wall', 'oblation'],
      5331.7: 'missionary',
      5424.5: 'reprisal',
      5453.8: 'missionary',
      // really 5483, but can't use until 5484.5
      5484.5: 'reprisal',
    });
  },
});
