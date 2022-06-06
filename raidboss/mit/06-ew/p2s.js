Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheSecondCircleSavage,
  filename: 'user p2s',
  timeline: (data) => {
    if (data.job !== 'DRK')
      return;
    return mitMapToTimeline({
      26.3: 'shadow wall',
      38.8: 'reprisal',
      82.6: 'missionary',
      98.4: 'reprisal',
      158.5: 'shadow wall',
      202.2: 'rampart',
      228.9: 'reprisal',
      281.7: 'rampart',
      290.8: 'missionary',
      388.5: ['reprisal', 'shadow wall'],
      428.2: 'missionary',
      453.4: 'rampart',
      479.2: 'reprisal',
      516.6: 'shadow wall',
      588.3: 'rampart',
      600.4: ['reprisal', 'missionary'],
    });
  },
});
