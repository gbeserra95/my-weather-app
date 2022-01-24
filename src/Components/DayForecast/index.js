import React from 'react'
import PropTypes from 'prop-types'
import WeatherIcon from '../WeatherIcon'

function DayForecast({ date, maxTemp, weather, main }) {
  return (
    <div className="day-f-box">
      <div className="day-f-date">{date}</div>
      <div className="day-f-temp">
        <span>{maxTemp}°C</span>
      </div>
      <WeatherIcon main={main} size={48} />
      <div className="day-f-text">{weather}</div>
    </div>
  )
}

export default DayForecast

DayForecast.prototypepropTypes = {
  date: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
}
