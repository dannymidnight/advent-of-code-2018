import {
  findMostCommonMinuteForId,
  findMostFrequentAsleepOnMinute,
  findMostMinutesID,
  transform
} from "../src/findMostMinutes";

describe("Day 4", () => {
  test("example data", () => {
    // Example input shuffled around a bit
    const input = [
      "[1518-11-01 00:05] falls asleep",
      "[1518-11-01 00:30] falls asleep",
      "[1518-11-03 00:05] Guard #10 begins shift",
      "[1518-11-01 00:55] wakes up",
      "[1518-11-01 23:58] Guard #99 begins shift",
      "[1518-11-01 00:00] Guard #10 begins shift",
      "[1518-11-02 00:40] falls asleep",
      "[1518-11-02 00:50] wakes up",
      "[1518-11-03 00:24] falls asleep",
      "[1518-11-03 00:29] wakes up",
      "[1518-11-01 00:25] wakes up",
      "[1518-11-04 00:46] wakes up",
      "[1518-11-05 00:55] wakes up",
      "[1518-11-04 00:02] Guard #99 begins shift",
      "[1518-11-04 00:36] falls asleep",
      "[1518-11-05 00:03] Guard #99 begins shift",
      "[1518-11-05 00:45] falls asleep"
    ];

    const output = transform(input);
    const id = findMostMinutesID(output);
    const [minute] = findMostCommonMinuteForId(id, output);

    expect(id).toEqual(10);
    expect(minute).toEqual(24);

    expect(findMostFrequentAsleepOnMinute(output)).toEqual([99, 45]);
  });
});
