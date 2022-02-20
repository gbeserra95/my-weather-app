import React from 'react'
import DayForecast from '../DayForecast'
import PropTypes from 'prop-types'

import { Container } from './styles'

import { formateDate } from '../../utils/formateDate'

function Forecast({ data }) {
  let forecastList = []
  let counter = 8

  for (let i = 0; i < 4; i++) {
    forecastList.push(data[counter])
    counter += 8
  }
  return (
    <Container>
      {React.Children.toArray(
        forecastList.map(day => {
          return (
            <DayForecast
              date={formateDate(new Date(day.dt_txt), true)}
              maxTemp={Math.round(day.main.temp_max)}
              minTemp={Math.round(day.main.temp_min)}
              weather={day.weather[0].description}
              main={day.weather[0].main}
            />
          )
        })
      )}
    </Container>
  )
}
// date, maxTemp, minTemp, weather
export default Forecast

Forecast.prototypepropTypes = {
  data: PropTypes.string.isRequired,
  timeZone: PropTypes.number.isRequired
}
