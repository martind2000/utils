/**
 * Get a string phrase for the current time of day
 * @param timeString
 * @param today
 *
 * @signature
 *    U.partOfDay(timeString, today)
 * @example
 *    U.partOfDay('13:00') // => 'Afternoon'
 */
export function partOfDay(timeString: string, today: boolean = false): string {
  if (timeString === undefined || timeString === null) timeString = new Date().getHours().toString();

  if (today === undefined) today = false;

  const hours: number = parseInt(timeString.substring(0, 2), 10);

  let dayBit;

  if (hours >= 0 && hours < 4) dayBit = 'Late Night';
  else if (hours >= 4 && hours < 7) dayBit = 'Early Morning';
  else if (hours >= 7 && hours < 12) dayBit = 'Morning';
  else if (hours >= 12 && hours < 17) dayBit = 'Afternoon';
  else if (hours < 21) dayBit = 'Evening';
  else dayBit = 'Night';

  if (today) dayBit = dayBit === 'night' ? 'tonight' : `this ${dayBit}`;

  return dayBit;
}
