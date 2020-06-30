function getDate(time) {
  const date = new Date(time);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const year = date.getFullYear(date);

  const dayName = days[date.getDay(time)];

  const monthName = months[date.getMonth(time)];

  const day = date.getDate(time);


  return `${dayName} ${day} ${monthName} ${year}`;
}

function getShortDate(time) {
  const date = new Date(time);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = date.getDate(time);
  const monthName = months[date.getMonth(time)];
  return `${day} ${monthName}`;
}

function getTime(time) {
  const pad = value => String(value).padStart(2, '0');
  const date = new Date(time);
  const hours = date.getHours(time);
  const minutes = date.getMinutes(time);

  return `${pad(hours)}:${pad(minutes)}`;
}

export { getDate, getShortDate, getTime };