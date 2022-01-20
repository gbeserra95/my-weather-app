// Libraries
import PropTypes from 'prop-types'
// Utils
import { formateDate } from '../../utils/formateDate'
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
      <div className="weather-weather">
        {maxTemp}° / <span>{minTemp}°</span> {weather}
      </div>
      <div className="weather-info">
        <div>Nascer do sol: {sunrise}</div>
        <div>Pôr do sol: {sunset}</div>
      </div>
      <div className="weather-info">
        <div>Umidade: {humidity}%</div>
        <div>Vento: {wind.toFixed(2)} km/h</div>
      </div>
      <div className="weather-info">
        <div>Sensação térmica: {feelsLike}°C</div>
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
