const api = {
  base: 'https://api.openweathermap.org/data/2.5/',
  key: '',
  units: 'metric'
}

export async function getData(latitude, longitude) {
  try {
    const response = await fetch(
      `${api.base}forecast?lat=${latitude}&lon=${longitude}&units=${api.units}&appid=${api.key}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
