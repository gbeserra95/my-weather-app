// Libraries
import PropTypes from 'prop-types'
// TO-DO
// import formatDate function
function Weather({
  city,
  country,
  temperature,
  weather,
  sunrise,
  sunset,
  rain,
  umidity,
  wind,
  feelsLike
}) {
  return (
    <div className="weather-container">
      <div className="weather-city">
        {city}, {country}
      </div>
      <div className="weather-date">Format Date</div>
      <div className="weather-temperature">{temperature}°C</div>
      <div className="weather-weather">{weather}</div>
      <div className="weather-info">
        <div>Nascer do sol: {sunrise}</div>
        <div>Pôr do sol: {sunset}</div>
      </div>
      <div className="weather-info">
        <div>Chuva: {rain}%</div>
        <div>Umidade: {umidity}%</div>
        <div>Vento: {wind} km/h</div>
      </div>
      <div className="weather-info">
        <div>Sensação térmica: {feelsLike}°C</div>
      </div>
    </div>
  )
}

Weather.prototypepropTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  rain: PropTypes.number.isRequired,
  umidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired
}

export default Weather
