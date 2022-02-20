const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const MONTHS = [
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
  'December'
]

export const formateDate = (d, short) => {
  let day = DAYS[d.getDay()]
  let date = d.getDate()
  let month = MONTHS[d.getMonth()]
  let year = d.getFullYear()

  if (!short) return `${day}, ${month} ${date}, ${year}`

  return `${day.substring(0, 3)}, ${month.substring(0, 3)} ${date}`
}

export const timeStampToHour = timeStamp => {
  let date = new Date(timeStamp)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  if (hours < 10) hours = '0' + hours.toString()
  if (minutes < 10) minutes = '0' + minutes.toString()

  return `${hours}h${minutes}`
}

export const UTCdate = () => {
  const d = new Date()
  return d.getTime() + 3600 * 3000
}
