import React, { useState, useContext } from 'react'
import { AppContext } from '../../App'
import './Home.css'
const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const { kwh, setKwh } = useContext(AppContext)
  return (
    <div className='home-root'>
      <h1>Synteza Rachunku za energię w domu</h1>
      <div className='home-wrapper'>
        <div className='home-info'>
          <h3>
            Aktualna stawka za 1kwh to{' '}
            <span style={{ color: 'red' }}>{Number(kwh).toFixed(2)}</span> PLN
          </h3>
          <h3>Podaj stawkę brutto za 1kwh</h3>
          <p>
            Uwzględnij wszystkie opłaty w tym przesyłową, abonamentową ...itp{' '}
          </p>
          <input
            type='number'
            placeholder='1.11'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => setKwh(inputValue)}>Zapisz</button>
        </div>
        <div className='img'>
          <img
            src='/public/electricity-bill.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Home
