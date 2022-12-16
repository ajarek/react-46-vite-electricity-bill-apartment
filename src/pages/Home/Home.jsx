import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home-root'>
      <h1>Synteza Rachunku za energię w domu</h1>
      <div className="home-wrapper">
      <div className="home-info">
        <h3>Podaj stawkę brutto za  1kwh</h3>
        <p>Uwzględnij wszystkie opłaty w tym przesyłową, abonamentową ...itp </p>
        <input type="number" placeholder='domyślnie: 1.11'/>
      </div>
      <div className="img">
        <img src="/public/electricity-bill.png" alt="" />
      </div>
      
      </div>
    </div>
  )
}

export default Home