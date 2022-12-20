import React,{useState} from "react"
import Hamburger from 'hamburger-react'
import { NavLink } from "react-router-dom"
import './Navigation.css'

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false)

  return (
   
    <nav
      className='navigation-root'
    
    >
       <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
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
      </ul>  
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#f15e50' : '#808080'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}
export default Navigation