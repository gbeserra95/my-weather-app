import React from 'react'

// import { Container } from './styles';

function Weather() {
  return (
    <div className="weather-container">
      <div className="weather-city">Blumenau, Brasil</div>
      <div className="weather-date">Terça, 18 de janeiro de 2022</div>
      <div className="weather-temperature">36°C</div>
      <div className="weather-weather">Ensolarado</div>
      <div className="weather-info">
        <div>Nascer do sol: 05h45</div>
        <div>Pôr do sol: 18h44</div>
      </div>
      <div className="weather-info">
        <div>Chuva: 17%</div>
        <div>Umidade: 55%</div>
        <div>Vento: 10 km/h</div>
      </div>
      <div className="weather-info">
        <div>Sensação térmica: 40°C</div>
      </div>
    </div>
  )
}

export default Weather
