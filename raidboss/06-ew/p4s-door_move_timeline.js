Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFourthCircleSavage,
  timeline: [
    // The boss has 1 second of movement between Setting the Scene and Pinax.
    // Technically the boss doesn't seem to move until 108.0 (from video),
    // but this is probably lag as the boss moves slightly after the cast starts at 109.
    '107.8 "--MOVE BOSS--"',
    '358.1 "--MOVE BOSS--"',
  ],
});
