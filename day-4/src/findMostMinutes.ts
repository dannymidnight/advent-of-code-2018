import { flatten } from "lodash";

enum EventType {
  Start = "Start",
  Sleep = "Sleep",
  Wake = "Wake"
}

interface Record {
  date: string;
  mins: number[];
  id: number;
}

interface Event {
  date: string;
  type: EventType;
  id: number;
}

export function transform(input: string[]): Record[] {
  let events = input.map(i => {
    const [, dateRaw, actionRaw] = i.match(/\[(.*)\] (.*)/)!;

    let event: EventType;
    let id = 0;

    if (actionRaw === "wakes up") {
      event = EventType.Wake;
    } else if (actionRaw === "falls asleep") {
      event = EventType.Sleep;
    } else {
      const [, idRaw] = actionRaw.match(/#(\d+)/)!;
      id = parseInt(idRaw, 0);
      event = EventType.Start;
    }

    return {
      date: dateRaw,
      id,
      type: event
    };
  });

  events = events.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    return -1;
  });

  const records: Record[] = [];
  let currentId = 0;
  let currentMinRange = 0;

  for (const event of events) {
    const match = event.date.match(/\d+-(.*) 00:(\d+)/);
    let date = "";
    let minute = 0;

    if (match) {
      date = match[1];
      minute = parseInt(match[2], 0);
    }

    if (event.type === EventType.Start) {
      currentId = event.id;
    }

    if (event.type === EventType.Sleep) {
      currentMinRange = minute;
    }

    if (event.type === EventType.Wake) {
      // Create array of minutes asleep
      const mins = [];
      for (let min = currentMinRange; min < minute; min++) {
        mins.push(min);
      }

      records.push({
        date,
        id: currentId,
        mins
      });
    }
  }

  return records;
}

// return ID x minute
export function findMostMinutesID(records: Record[]): number {
  const totals = new Map<number, number>();

  for (const record of records) {
    const { id } = record;
    const total = totals.get(id) || 0;
    totals.set(id, total + record.mins.length);
  }

  const s = Array.from(totals).sort((a, b) => {
    return a[1] === b[1] ? 0 : a[1] < b[1] ? 1 : -1;
  });

  return s[0][0];
}

type MinuteOccurances = {
  minute: number;
  occurances: number;
};

// Returns [Minute, Frequency] tuple
export function findMostCommonMinuteForId(
  id: number,
  records: Record[]
): number[] {
  // Create map of minutes to occurance for a given ID
  const counts = flatten(
    records.filter(r => r.id === id).map(r => r.mins)
  ).reduce<{ [key: number]: number }>((counts, minute) => {
    counts[minute] = (counts[minute] || 0) + 1;
    return counts;
  }, {});

  // Order minutes by frequency
  const [mostCommonMinute] = Object.keys(counts).sort(
    (a, b) => counts[parseInt(b, 0)] - counts[parseInt(a, 0)]
  );

  const minute = parseInt(mostCommonMinute, 0);
  return [minute, counts[minute]];
}

// Returns [ID, Minute] tuple
export function findMostFrequentAsleepOnMinute(records: Record[]): number[] {
  const idsWithFrequency: {
    [key: number]: MinuteOccurances;
  } = {};

  for (const record of records) {
    if (idsWithFrequency[record.id]) {
      continue;
    }

    const [minute, occurances] = findMostCommonMinuteForId(record.id, records);
    idsWithFrequency[record.id] = {
      minute,
      occurances
    };
  }

  // Order IDs by occurances
  const [result] = Object.entries(idsWithFrequency).sort((a, b) => {
    return b[1].occurances - a[1].occurances;
  });

  return [parseInt(result[0], 0), result[1].minute];
}
