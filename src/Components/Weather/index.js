import PropTypes from 'prop-types'
import { formateDate } from '../../utils/formateDate'
import WeatherIcon from '../WeatherIcon'

const SMALL_ICON_SIZE = 36
function Weather({
  maxTemp,
  minTemp,
  city,
  country,
  temp,
  weather,
  sunrise,
  sunset,
  humidity,
  wind,
  feelsLike
}) {
  return (
    <div className="weather-container">
      <div className="weather-city">
        {city}, {country}
      </div>
      <div className="weather-date">{formateDate(new Date())}</div>
      <div className="weather-temperature">{temp}°C</div>
      <div className="weather-weather">{weather}</div>
      <div className="weather-info">
        <div className="weather-div">
          <WeatherIcon main="MaxTemp" size={24} />
          <div>{maxTemp} °C</div>
        </div>
        <div className="weather-div">
          <WeatherIcon main="MinTemp" size={24} />
          <div>{minTemp} °C</div>
        </div>
      </div>
      <div className="weather-info">
        <div className="weather-div">
          <WeatherIcon main="Sunrise" size={SMALL_ICON_SIZE} />
          <div>{sunrise}</div>
        </div>
        <div className="weather-div">
          <WeatherIcon main="Sunset" size={SMALL_ICON_SIZE} />
          <div>{sunset}</div>
        </div>
      </div>
      <div className="weather-info">
        <div className="weather-div">
          <WeatherIcon main="Humidity" size={36} />
          <div>{humidity}</div>
        </div>
        <div className="weather-div">
          <WeatherIcon main="Wind" size={24} />
          <div>{wind.toFixed(2)} km/h</div>
        </div>
      </div>
      <div className="weather-info">
        <div className="weather-div">Sensação térmica: {feelsLike}°C</div>
      </div>
    </div>
  )
}

Weather.prototypepropTypes = {
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired
}

export default Weather
