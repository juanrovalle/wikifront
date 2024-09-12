/**
 * Formats a given date string in YYYY-MM-DD format to YYYY/MM/DD.
 * @param dateString - A date string in the format YYYY-MM-DD.
 * @returns The formatted date in YYYY/MM/DD format.
 */
export const formatDateWithSlashes = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so we add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
};
