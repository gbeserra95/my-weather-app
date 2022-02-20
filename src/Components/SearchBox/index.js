import { Input } from './styles'

function SearchBox({ ...otherProps }) {
  return <Input type="text" placeholder="Type a city..." {...otherProps} />
}

export default SearchBox
