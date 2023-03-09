import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <nav>
        <Link to={props.linkTo} >
          <button style={{objectFit: "fill"}}>
          <img src={props.picture} width={props.width}/>
            {props.children}
          </button>
        </Link>
      
    </nav>
  )
}

export default NavBar