export const formatTimeToRU = (date: string) => {
  const DATE = new Date(date);
  const hh = DATE.getHours() < 10 ? "0" + DATE.getHours() : DATE.getHours();
  const mins =
    DATE.getMinutes() < 10 ? "0" + DATE.getMinutes() : DATE.getMinutes();
  return hh + ":" + mins;
};
