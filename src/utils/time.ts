export const transformTime = (date: Date) => {
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes();
  const timeZoneOffsetHours = date.getTimezoneOffset() / 60;
  const timeSufix = date.getHours() > 12 ? 'pm' : 'am';
  return `${
    hours + timeZoneOffsetHours
  }:${minutes}${timeSufix} (GMT${timeZoneOffsetHours}:00)`;
};
