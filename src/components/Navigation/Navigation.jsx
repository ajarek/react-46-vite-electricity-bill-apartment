import React from "react"
import { NavLink } from "react-router-dom"
import './Navigation.css'

export const Navigation = () => {
  

  return (
    <nav
      className='navigation-root'
    
    >
      <NavLink
        className='link'
        to='/'
      >
       Głowna
      </NavLink>
      <NavLink
        className='link'
        to='/listreceiver'
      >
       Wykaz Odbiorników
      </NavLink>
      <NavLink
        className='link'
        to='/receiver'
      >
        Dodaj Odbiornik
      </NavLink>
      
     
    </nav>
  )
}
export default Navigation