export function LastThreeMonths() {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();

  const currentYear = currentDate.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Generate options for the last three months
  const lastThreeMonths = [];
  for (let i = 0; i < 3; i++) {
    const monthIndex = (currentMonth - i + 12) % 12; // Ensure index is within 0-11 range
    let year = currentYear;
    if (monthIndex > currentMonth) {
      year--; // If month is in previous year
    }
    lastThreeMonths.push({
      month: months[currentMonth - 1],
      year: currentYear,
      data: `${currentYear}-${
        currentMonth < 10 ? '0' + currentMonth : currentMonth
      }-01`,
    });
  }
  return lastThreeMonths;
}
