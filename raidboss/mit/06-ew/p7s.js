Options.Triggers.push({
  zoneId: ZoneId.AbyssosTheSeventhCircleSavage,
  filename: 'user p7s',
  timeline: (data) => {
    if (data.job !== 'DRK')
      return;
    return mitMapToTimeline({
      26.3: ['rampart', 'missionary'],
      91.7: ['shadow wall'],
      132.9: 'missionary',
      157.1: ['rampart'],
      258.3: ['shadow wall'],
      324.2: ['rampart'],
      376.1: ['reprisal'],
      429.7: ['missionary'],
      460.8: ['reprisal'],
      643.1: ['missionary'],
      656.4: ['reprisal'],
    });
  },
});
