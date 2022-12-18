import { Routes, Route } from "react-router-dom"
import { useState, createContext } from 'react'
import Navigation from './components/Navigation/Navigation'
import ListReceiver from './pages/ListReceiver/ListReceiver'
import Receiver from './pages/Receiver/Receiver'
import Home from './pages/Home/Home'
export const AppContext = createContext()
function App() {
  const [kwh, setKwh] = useState(1.11)
  return (
    <div className='App'>
        <AppContext.Provider
        value={{kwh, setKwh}}>
      <Navigation/>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/listreceiver'
          element={<ListReceiver />}
        />
        <Route
          path='/receiver'
          element={<Receiver />}
        />
      </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
