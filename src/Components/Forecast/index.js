import React from 'react'
import DayForecast from '../DayForecast'
import PropTypes from 'prop-types'
import { formateDate } from '../../utils/formateDate'

function Forecast({ timeZone, data }) {
  let forecastList = []
  let counter = 0

  for (let i = 0; i < 4; i++) {
    forecastList.push(data[counter])
    counter += 8
  }
  console.log(forecastList)
  return (
    <div className="forecast-box">
      {React.Children.toArray(
        forecastList.map(day => {
          console.log(day.main.temp_max, day.main.temp_min)
          return (
            <DayForecast
              date={formateDate(new Date(day.dt_txt), true)}
              maxTemp={Math.round(day.main.temp_max)}
              minTemp={Math.round(day.main.temp_min)}
              weather={day.weather[0].description}
            />
          )
        })
      )}
    </div>
  )
}
// date, maxTemp, minTemp, weather
export default Forecast

Forecast.prototypepropTypes = {
  data: PropTypes.string.isRequired,
  timeZone: PropTypes.number.isRequired
}
