Options.Triggers.push({
  zoneId: ZoneId.DragonsongsRepriseUltimate,
  filename: 'user DSR',
  timeline: (data) => {
    return mitMapToTimeline({
      1.0: 'missionary',
      25.3: 'living dead',
      51.9: 'reprisal',
      69.1: 'shadow wall',
      122.2: 'reprisal',
      520.9: 'missionary',
      535.9: 'rampart',
      611.0: 'missionary',
      627.7: 'reprisal',
      706.1: ['missionary', 'reprisal'],
      1052: 'reprisal',
      1532.9: 'missionary',
      2036.2: ['missionary', 'reprisal'],
      // thordan 2 quaga #1
      3057.4: 'missionary',
      // thordan 2 heavenly heel
      3067.8: ['rampart', 'shadow wall'],
      // thordan 2 quaga #2
      3140.3: 'reprisal',
      // thordan 2 busters
      3150.5: 'living dead',
      // adds first tethers
      3535.0: ['shadow wall', 'oblation'],
      // akh afah 1
      3554.3: ['reprisal', 'missionary'],
      // hallowed 1
      3568.2: ['rampart', 'dark mind'],
      // 4th akh morn
      3598.1: [],
      // akh afah 2
      3623.4: ['reprisal'],
      // hallowed 2
      3635.5: ['dark mind'],
      // tethers 2
      3655.9: ['tbn'],
      // cauterize
      3668.4: ['shadow wall', 'rampart', 'oblation'],
      // TODO: adjust these timings for Akh Morn duration
      // AM1
      4057.0: ['living dead', 'reprisal'],
      // Giga1
      4083.9: ['missionary'],
      // AM2
      4135.7: ['shadow wall', 'rampart', 'dark mind', 'reprisal'],
      // Giga2
      4162.6: [],
      // AM3
      4125.5: ['rampart', 'dark mind', 'reprisal', 'missionary'],
    });
  },
});
