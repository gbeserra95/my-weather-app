import React from 'react'
import PropTypes from 'prop-types'

function DayForecast({ date, maxTemp, minTemp, weather }) {
  return (
    <div className="day-f-box">
      <div className="day-f-date">{date}</div>
      <div className="day-f-temp">
        <span>{maxTemp}°</span>/{minTemp}°
      </div>
      <div className="day-f-text">{weather}</div>
    </div>
  )
}

export default DayForecast

DayForecast.prototypepropTypes = {
  date: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
}
