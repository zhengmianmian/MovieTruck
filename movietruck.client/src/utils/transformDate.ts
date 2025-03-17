export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Expected YYYY-MM-DD.");
  }

  const dayAbbrev = date.toLocaleDateString("en-US", { weekday: "short" }); // "Tue"
  const day = date.getDate().toString().padStart(2, "0"); // "10"
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // "06"

  return `${dayAbbrev} ${day}/${month}`;
};

// Example Usage:
//console.log(formatDate("2025-06-10")); // Output: "Tue 10/06"
