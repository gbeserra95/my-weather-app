import React from 'react'
import PropTypes from 'prop-types'
import { getData } from '../../utils/weatherApi'

import { Container, ListItem } from './styles'

function List({ data, callback }) {
  return (
    <Container>
      {data &&
        React.Children.toArray(
          data.addresses.map(item => (
            <ListItem
              onClick={async () => {
                callback(
                  await getData(item.latitude, item.longitude),
                  `${item.city}`
                )
              }}
            >
              {item.city}, {item.state}, {item.country}
            </ListItem>
          ))
        )}
    </Container>
  )
}

export default List

List.prototypePropTypes = {
  data: PropTypes.object,
  callback: PropTypes.func
}
