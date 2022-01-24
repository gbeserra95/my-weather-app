import './App.css'

import { useState, useEffect } from 'react'

import Container from './Components/Container'
import SearchBox from './Components/SearchBox'
import Weather from './Components/Weather'
import Forecast from './Components/Forecast'

import { getCoordinates } from './utils/getLocation'
import { timeStampToHour } from './utils/formateDate'
// API basics
const api = {
  base: 'https://api.openweathermap.org/data/2.5/',
  name: 'forecast/',
  key: '',
  language: 'pt_br',
  units: 'metric',
  exclude: 'minutely, hourly, alerts'
}

function App() {
  const [error, setError] = useState()
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function handleUserLocation() {
      getCoordinates
        .then(response => {
          //console.log(response)
          fetch(
            `${api.base}${api.name}?${api.exclude}&lat=${response.coords.latitude}&lon=${response.coords.longitude}&units=${api.units}&lang=${api.language}&appid=${api.key}`
          )
            .then(async res => {
              const data = await res.json()
              setWeather(data)
              console.log(data)
            })
            .catch(e => {
              setError(e)
              return
            })
        })
        .catch(e => {
          console.log(e)
          setError(e)
          return
        })
    }
    handleUserLocation()
  }, [])

  return (
    <div className="app">
      <main>
        <SearchBox />
        {weather ? (
          <Weather
            maxTemp={Math.round(weather.list[0].main.temp_max)}
            minTemp={Math.round(weather.list[0].main.temp_min)}
            city={weather.city.name}
            country={weather.city.country}
            temp={Math.round(weather.list[0].main.temp)}
            weather={weather.list[0].weather[0].description}
            sunrise={timeStampToHour(weather.city.sunrise)}
            sunset={timeStampToHour(weather.city.sunset)}
            humidity={weather.list[0].main.humidity}
            wind={3.6 * weather.list[0].wind.speed}
            feelsLike={Math.round(weather.list[0].main.feels_like)}
          />
        ) : (
          <div>{error}</div>
        )}
        {weather ? (
          <Forecast timeZone={weather.city.timezone} data={weather.list} />
        ) : (
          <div>{error}</div>
        )}
      </main>
    </div>
  )
}

export default App
