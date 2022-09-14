// Same as built-in Natural Alignment, but with different ids.

Options.Triggers.push({
  zoneId: ZoneId.AbyssosTheEighthCircleSavage,
  triggers: [
    {
      id: 'P8S Natural Alignment First',
      type: 'GainsEffect',
      // This is a magic effectId with a statusloopvfx count, like 808 elsewhere.
      netRegex: NetRegexes.gainsEffect({ effectId: '9F8' }),
      response: (data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          ice: {
            en: 'Ice Groups First',
            ja: '氷の頭割りから',
            ko: '얼음 쉐어 먼저',
          },
          fire: {
            en: 'Fire Partners First',
            ja: '火の2人頭割りから',
            ko: '불 2인쉐어 먼저',
          },
          stack: {
            en: 'Stack First',
            ja: '頭割りから',
            ko: '쉐어 먼저',
          },
          spread: {
            en: 'Spread First',
            ja: '散会から',
            ko: '산개 먼저',
          },
          baitAndStack: {
            en: 'Bait => Stack',
            ja: '誘導 => 頭割り',
            ko: '장판 유도 => 쉐어',
          },
          baitAndSpread: {
            en: 'Bait => Spread',
            ja: '誘導 => 散会',
            ko: '장판 유도 => 산개',
          },
        };
        const isReversed = data.inverseMagics[matches.target] === true;
        const id = matches.count;

        // Huge credit to Aya for this.  Also note `209` is the purple swirl.
        const ids = {
          fireThenIce: '1DD',
          iceThenFire: '1DF',
          stackThenSpread: '1E1',
          spreadThenStack: '1E3',
        };

        // The first time through, use the "bait" version to avoid people running off
        // as soon as they hear the beepy boops.
        if (!data.seenFirstAlignmentStackSpread) {
          // The first one can't be reversed.
          // Store the follow-up ability so it can be used with the left/right Ashing Blaze.
          if (id === ids.stackThenSpread) {
            data.firstAlignmentSecondAbility = 'spread';
            return { alertText: output.baitAndStack() };
          }
          if (id === ids.spreadThenStack) {
            data.firstAlignmentSecondAbility = 'stack';
            return { alertText: output.baitAndSpread() };
          }
        }

        const key = isReversed ? 'alarmText' : 'alertText';
        if (!isReversed && id === ids.fireThenIce || isReversed && id === ids.iceThenFire)
          return { [key]: output.fire() };
        if (!isReversed && id === ids.iceThenFire || isReversed && id === ids.fireThenIce)
          return { [key]: output.ice() };
        if (!isReversed && id === ids.spreadThenStack || isReversed && id === ids.stackThenSpread)
          return { [key]: output.spread() };
        if (!isReversed && id === ids.stackThenSpread || isReversed && id === ids.spreadThenStack)
          return { [key]: output.stack() };
      },
    },
  ],
});
