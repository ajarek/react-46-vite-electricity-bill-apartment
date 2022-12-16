import { Routes, Route } from "react-router-dom"
import Navigation from './components/Navigation/Navigation'
import ListReceiver from './pages/ListReceiver/ListReceiver'
import Receiver from './pages/Receiver/Receiver'
import Home from './pages/Home/Home'
function App() {
  return (
    <div className='App'>
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
    </div>
  )
}

export default App
