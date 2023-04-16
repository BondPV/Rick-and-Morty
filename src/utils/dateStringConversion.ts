export const dateStringConversion = (date: string): string => {
  const [convertedDate] = date.split('T') || '';
  return convertedDate;
};
