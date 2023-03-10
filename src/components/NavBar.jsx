import { Button } from 'antd'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import BeerButton from './BeerButton'

function NavBar(props) {
  return (
    <div className='navbar'>
    <div>
    <Link to={props.linkTo} >
          <img src={props.picture} width={props.width}/>
            {props.children}
        </Link>
    </div>
    <div>
    
    </div>
    <div className='buttons'>
      <BeerButton linkTo="/beers">Beers</BeerButton>
      <BeerButton linkTo="/random-beer">Random Beer</BeerButton>
    <BeerButton linkTo="/new-beer">New Beer</BeerButton>
    </div>
        

        
      
    </div>
  )
}

export default NavBar