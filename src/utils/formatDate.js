const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function formatDate(date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = months[newDate.getMonth()];
  const day = newDate.getDay();
  const dateString = `${month} ${day}, ${year}`;
  return dateString;
}

export default formatDate;
