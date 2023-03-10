import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function BeerButton(props) {
  return (
    <div>
        <Link to={props.linkTo}>
        <Button>
            {props.children}
        </Button>
        </Link>
    </div>
  )
}

export default BeerButton