const api = {
  base: process.env.REACT_APP_WEATHER_BASE_API,
  key: process.env.REACT_APP_WEATHER_API_KEY,
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
