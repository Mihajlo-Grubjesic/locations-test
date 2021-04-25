import { transformTime } from './time';

test('Check if date is formatted to hh:mm am/pm(timezone offset)', () => {
  const date = new Date('2021-03-04T19:53:53.946Z');
  expect(transformTime(date)).toBe('7:53pm (GMT-1:00)');
});
