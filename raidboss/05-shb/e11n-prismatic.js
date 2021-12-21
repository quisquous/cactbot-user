Options.Triggers.push({
  zoneId: ZoneId.EdensPromiseAnamorphosis,
  triggers: [
    {
      id: 'E11N Prismatic Collect',
      netRegex: NetRegexes.statusEffectExplicit(
        { target: 'Fatebreaker\'s Image', data3: '010655' },
      ),
      run: (data, matches) => {
        data.clones = data.clones || {};
        data.clones[matches.targetId] = matches.heading;
      },
    },
    {
      id: 'E11N Prismatic Calculate',
      // Find the entities during Blasting Zone.
      netRegex: NetRegexes.startsUsing({ id: '5651', capture: false }),
      suppressSeconds: 5,
      infoText: (data, _, output) => {
        for (const key of Object.keys(data.clones)) {
          data.cloneHeading = data.cloneHeading || [];
          // Facing in FFXIV is displayed relative to south as 0, with eastward positions (westward
          // facing) being positive, while westward positions (eastward facing) are negative.
          // If the clone's heading is negative, add pi to give us the facing on the opposite side,
          // with a positive value for ease of calculation.
          const cloneHeading = parseFloat(data.clones[key]);
          const unsafe = cloneHeading > 0 ? cloneHeading : cloneHeading + Math.PI;
          console.log(unsafe);
          if (unsafe < 0.5)
            data.cloneHeading.push(0);
          else if (unsafe < 1 && unsafe > 0.5)
            data.cloneHeading.push(1);
          else if (unsafe < 2 && unsafe > 1)
            data.cloneHeading.push(2);
          else if (unsafe < 3 && unsafe > 2)
            data.cloneHeading.push(3);
          else
            data.cloneHeading.push(0);
        }

        const safePos = [0, 1, 2, 3].filter((d) => !data.cloneHeading.includes(d));
        console.log(data.safePos);

        return output[data.safePos]();
      },
      outputStrings: {
        0: { en: 'North/South' },
        1: { en: 'Northwest/Southeast' },
        2: { en: 'East/West' },
        3: { en: 'Northeast/Southwest' },
      },
    },
  ],
});
