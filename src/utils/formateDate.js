export const formateDate = (d, short) => {
  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]

  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]

  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  if (!short) return `${day}, ${date} de ${month} de ${year}`

  return `${day.substring(0, 3)}, ${date}/${month.substring(0, 3)}`
}

export const timeStampToHour = timeStamp => {
  let date = new Date(timeStamp * 1000)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  return `${hours}:${minutes}`
}
