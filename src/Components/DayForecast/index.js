import React from 'react'
import PropTypes from 'prop-types'
import WeatherIcon from '../WeatherIcon'

import { ContainerMax, ContainerMin, Date, Temp, Text } from './styles'

function DayForecast({ date, maxTemp, weather, main }) {
  return (
    <>
      <ContainerMax>
        <Date>{date}</Date>
        <Temp>
          <span>{maxTemp}°C</span>
        </Temp>
        <WeatherIcon main={main} size={48} />
        <Text>{weather}</Text>
      </ContainerMax>
      <ContainerMin>
        <Date>{date}</Date>
        <Temp>
          <span>{maxTemp}°C</span>
        </Temp>
        <WeatherIcon main={main} size={48} />
        <Text>{weather}</Text>
      </ContainerMin>
    </>
  )
}

export default DayForecast

DayForecast.prototypepropTypes = {
  date: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
}
