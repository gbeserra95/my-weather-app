// Styles
import './App.css'
// Hooks
import { useState, useEffect } from 'react'
// Components
import SearchBox from './Components/SearchBox'
import Weather from './Components/Weather'
import Forecast from './Components/Forecast'
// Utils
import { getCoordinates } from './utils/getLocation'
// API basics
const api = {
  base: 'https://api.openweathermap.org/data/2.5/',
  key: '',
  language: 'pt_br',
  units: 'metric'
}

function App() {
  const [error, setError] = useState()
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function handleUserLocation() {
      getCoordinates
        .then(response => {
          fetch(
            `${api.base}weather?lat=${response.coords.latitude}&lon=${response.coords.longitude}&units=${api.units}&lang=${api.language}&appid=${api.key}`
          )
            .then(async response => {
              const data = await response.json()
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
            city={weather.name}
            country={weather.sys.country}
            temp={Math.round(weather.main.temp)}
            weather={weather.weather.main}
            sunrise={weather.sys.sunrise}
            sunset={weather.sys.sunset}
            humidity={weather.main.humidity}
            wind={weather.wind.speed}
            feelsLike={Math.round(weather.main.feels_like)}
          />
        ) : (
          <div>{error}</div>
        )}
        <Forecast />
      </main>
    </div>
  )
}

export default App
