import PropTypes from 'prop-types'

import {
  Container,
  Place,
  DateDiv,
  Temp,
  WeatherDiv,
  Info,
  InfoDiv
} from './styles'

import { timeStampToHour, formateDate, UTCtime } from '../../utils/formateDate'
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
  feelsLike,
  currentTime
}) {
  return (
    <Container>
      <Place>
        {city}, {country}
      </Place>
      <DateDiv>
        {formateDate(new Date(Date.now() + currentTime * 1000))}
      </DateDiv>
      <Temp>{temp}°C</Temp>
      <WeatherDiv>{weather}</WeatherDiv>
      <Info>
        <InfoDiv>
          <WeatherIcon main="MaxTemp" size={24} />
          <div>{maxTemp} °C</div>
        </InfoDiv>
        <InfoDiv>
          <WeatherIcon main="MinTemp" size={24} />
          <div>{minTemp} °C</div>
        </InfoDiv>
      </Info>
      <Info>
        <InfoDiv>
          <WeatherIcon main="Sunrise" size={SMALL_ICON_SIZE} />
          <div>{timeStampToHour(UTCtime() + currentTime * 1000 - new Date().getTime() + sunrise * 1000)}</div>
        </InfoDiv>
        <InfoDiv>
          <WeatherIcon main="Sunset" size={SMALL_ICON_SIZE} />
          <div>{timeStampToHour(UTCtime() + currentTime * 1000 - new Date().getTime() + sunset * 1000)}</div>
        </InfoDiv>
      </Info>
      <Info>
        <InfoDiv>
          <WeatherIcon main="Humidity" size={36} />
          <div>{humidity}%</div>
        </InfoDiv>
        <InfoDiv>
          <WeatherIcon main="Wind" size={24} />
          <div>{wind.toFixed(2)} km/h</div>
        </InfoDiv>
      </Info>
      <Info>
        <InfoDiv>Feels like: {feelsLike}°C</InfoDiv>
        <InfoDiv>
          <WeatherIcon main="Time" size={24} />
          <div>{timeStampToHour(UTCtime() + currentTime * 1000)}</div>
        </InfoDiv>
      </Info>
    </Container>
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
  feelsLike: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired
}

export default Weather
