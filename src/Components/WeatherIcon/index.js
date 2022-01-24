import { ImArrowUp, ImArrowDown } from 'react-icons/im'

import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiStrongWind,
  WiThunderstorm,
  WiSprinkle,
  WiRain,
  WiSnowflakeCold,
  WiWindy,
  WiSmoke,
  WiDust,
  WiFog,
  WiSandstorm,
  WiTornado,
  WiDaySunny,
  WiCloudy,
  WiAlien
} from 'react-icons/wi'

function WeatherIcon({ main, size }) {
  const color = '#F1F1F1'
  switch (main) {
    case 'MaxTemp':
      return <ImArrowUp color={color} size={size} />
    case 'MinTemp':
      return <ImArrowDown color={color} size={size} />
    case 'Sunrise':
      return <WiSunrise color={color} size={size} />
    case 'Sunset':
      return <WiSunset color={color} size={size} />
    case 'Humidity':
      return <WiHumidity color={color} size={size} />
    case 'Wind':
      return <WiStrongWind color={color} size={size} />
    case 'Thunderstorm':
      return <WiThunderstorm color={color} size={size} />
    case 'Drizzle':
      return <WiSprinkle color={color} size={size} />
    case 'Rain':
      return <WiRain color={color} size={size} />
    case 'Snow':
      return <WiSnowflakeCold color={color} size={size} />
    case 'Mist':
      return <WiDust color={color} size={size} />
    case 'Smoke':
      return <WiSmoke color={color} size={size} />
    case 'Haze':
      return <WiWindy color={color} size={size} />
    case 'Dust':
      return <WiDust color={color} size={size} />
    case 'Fog':
      return <WiFog color={color} size={size} />
    case 'Sand':
      return <WiSandstorm color={color} size={size} />
    case 'Ash':
      return <WiDust color={color} size={size} />
    case 'Squall':
      return <WiDust color={color} size={size} />
    case 'Tornado':
      return <WiTornado color={color} size={size} />
    case 'Clear':
      return <WiDaySunny color={color} size={size} />
    case 'Clouds':
      return <WiCloudy color={color} size={size} />
    default:
      return <WiAlien color={color} size={size} />
  }
}

export default WeatherIcon
