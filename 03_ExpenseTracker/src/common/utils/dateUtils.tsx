export function getFormattedDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to the month and padding
  const day = date.getDate().toString().padStart(2, "0"); // Getting the day of the month and padding
  return `${year}-${month}-${day}`;
}

export function getDateMinusDays(date: Date, days: number): Date {
  console.log(date, days);
  const millisecondsInADay = 86400000; // 1000 ms * 60 seconds * 60 minutes * 24 hours
  return new Date(date.getTime() - days * millisecondsInADay);
}
