import React from 'react'
import DayForecast from '../DayForecast'

// import { Container } from './styles';

function Forecast() {
  return (
    <div className="forecast-box">
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <DayForecast />
    </div>
  )
}

export default Forecast
