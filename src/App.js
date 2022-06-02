import { useState, useEffect } from 'react'
import Container from './components/Container'
import Main from './components/Main'
import SearchBox from './components/SearchBox'
import List from './components/List'
import Weather from './components/Weather'
import Forecast from './components/Forecast'

import Radar from 'radar-sdk-js'
import { getData } from './utils/weatherApi'
import { getCoordinates } from './utils/getLocation'
import { radarKey } from './utils/radarApi'

function App() {
  const [error, setError] = useState()
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState(null)

  function handlePlace(place, city) {
    setWeather(place)
    setCity(city)
    setQuery('')
    setFilter(null)
  }

  Radar.initialize(radarKey)

  useEffect(() => {
    function search() {
      if (query.trim().length !== 0) {
        Radar.autocomplete(
          {
            query: `${query}`,
            layers: 'locality',
            limit: 5
          },
          function (err, result) {
            if (!err) {
              setFilter(result)
            } else {
              setError(err)
              setFilter(null)
            }
          }
        )
      } else {
        setFilter(null)
      }
    }
    search()
  }, [query, error])

  useEffect(() => {
    async function handleUserLocation() {
      try {
        const response = await getCoordinates
        console.log(response)
        const data = await getData(
          response.coords.latitude,
          response.coords.longitude
        )
        setWeather(data)
        setCity(data.city.name)
      } catch (error) {
        setError(error)
      }
    }
    handleUserLocation()
  }, [])

  return (
    <Container
      weather={weather && weather.list[0].weather[0].main}
      time={
        weather && {
          localTime: Date.now() - weather.city.timezone,
          sunrise: weather.city.sunrise,
          sunset: weather.city.sunset
        }
      }
    >
      <Main>
        <SearchBox value={query} onChange={e => setQuery(e.target.value)} />
        {query && <List data={filter} callback={handlePlace} />}
        {weather ? (
          <Weather
            maxTemp={Math.round(weather.list[0].main.temp_max)}
            minTemp={Math.round(weather.list[0].main.temp_min)}
            city={city}
            country={weather.city.country}
            temp={Math.round(weather.list[0].main.temp)}
            weather={weather.list[0].weather[0].description}
            sunrise={weather.city.sunrise}
            sunset={weather.city.sunset}
            humidity={weather.list[0].main.humidity}
            wind={3.6 * weather.list[0].wind.speed}
            feelsLike={Math.round(weather.list[0].main.feels_like)}
            currentTime={weather.city.timezone}
          />
        ) : (
          <div>{error}</div>
        )}
        {weather ? (
          <Forecast timeZone={weather.city.timezone} data={weather.list} />
        ) : (
          <div>{error}</div>
        )}
      </Main>
    </Container>
  )
}

export default App
