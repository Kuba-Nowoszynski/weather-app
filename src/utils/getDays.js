function getDayInfo(date) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfMonth = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];

  return { dayOfMonth, dayOfWeek, month };
}

export default function getDays() {
  const today = new Date();
  const dayInfoList = [];

  for (let i = 0; i < 6; i++) {
    const currentDate = new Date();
    currentDate.setDate(today.getDate() + i);
    dayInfoList.push(getDayInfo(currentDate));
  }

  return dayInfoList.map(
    (dayInfo) => ` ${dayInfo.dayOfWeek}, ${dayInfo.dayOfMonth} ${dayInfo.month}`
  );
}
