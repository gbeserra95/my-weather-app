//Styles
import './App.css'
// Hooks
import { useState, useEffect } from 'react'
//Components
import SearchBox from './Components/SearchBox'
import Weather from './Components/Weather'
import Forecast from './Components/Forecast'

function App() {
  const useCurrentLocation = () => {
    const [error, setError] = useState()
    const [location, setLocation] = useState()

    const handleSuccess = position => {
      const { latitude, longitude } = position.coords

      setLocation({ latitude, longitude })
    }

    const handleError = error => setError(error.message)

    useEffect(() => {
      if (!navigator.geolocation) {
        setError('A geolocailazão não é suportada')
        return
      }

      navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    }, [])

    return { location, error }
  }

  console.log(useCurrentLocation())

  return (
    <div className="app">
      <main>
        <SearchBox />
        <Weather />
        <Forecast />
      </main>
    </div>
  )
}

export default App
