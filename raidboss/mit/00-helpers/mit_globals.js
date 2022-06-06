window.emojify = (arr) => {
  const emojo = '👋';
  const search = Regexes.parse(/^\s*(\y{Float})\s+"\s*(?!-)/);
  for (let i = 0; i < arr.length; ++i)
    arr[i] = arr[i].replace(search, '$1 " ' + emojo + ' ');
  return arr;
};

const buffSlop = 1;
const buffsToTime = {
  'reprisal': 10,
  'missionary': 15,
  'rampart': 20,
  'shadow wall': 15,
  'living dead': 10,
  'oblation': 10,
  'dark mind': 10,
  'tbn': 6,
};

const mitEntryToTimeline = (origTime, mitStr) => {
  const buffTime = buffsToTime[mitStr];
  if (buffTime === undefined) {
    console.error(`unknown buff: ${mitStr}`);
    return '';
  }
  const time = Math.max(origTime - buffTime + buffSlop, 0);
  const duration = buffTime - buffSlop;

  return `${time.toFixed(1)} "👋 ${mitStr}" duration ${duration}`;
};

window.mitMapToTimeline = (mitMap) => {
  const timeline = [];
  for (const [origTime, mit] of Object.entries(mitMap)) {
    if (typeof mit === 'string') {
      timeline.push(mitEntryToTimeline(origTime, mit));
    } else {
      for (const mitStr of mit)
        timeline.push(mitEntryToTimeline(origTime, mitStr));
    }
  }
  return timeline;
};
