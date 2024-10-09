export function getFromatedDate(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
}
