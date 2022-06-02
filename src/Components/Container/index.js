import PropTypes from 'prop-types'

import { main } from '../../utils/background'

import { App } from './styles'

const RAINBOW =
  'linear-gradient(to right, #3CBEDB, #FFFFFF, #3CBEDB);'
function Container({ weather, time, children }) {
  return (
    <App
      bg={
        weather
          ? time.localTime > time.sunrise * 1000 &&
            time.localTime < time.sunset * 1000
            ? `url(${main.find(item => item.main === weather).day});`
            : `url(${main.find(item => item.main === weather).night});`
          : RAINBOW
      }
    >
      {children}
    </App>
  )
}

export default Container

Container.prototypePropTypes = {
  weather: PropTypes.string,
  children: PropTypes.node.isRequired,
  time: PropTypes.object
}
