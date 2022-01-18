import './App.css'
import Forecast from './Components/Forecast'

//Components
import SearchBox from './Components/SearchBox'
import Weather from './Components/Weather'

function App() {
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
