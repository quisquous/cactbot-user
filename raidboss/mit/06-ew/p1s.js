Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFirstCircleSavage,
  filename: 'user p1s',
  timeline: (data) => {
    if (data.job !== 'DRK')
      return;
    return mitMapToTimeline({
      31.9: 'reprisal',
      75.5: 'missionary',
      105.3: 'reprisal',
      188.2: ['reprisal', 'missionary'],
      278.4: ['reprisal', 'missionary'],
      407.6: ['reprisal', 'missionary'],
    });
  },
});
