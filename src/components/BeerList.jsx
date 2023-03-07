import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


function BeerList() {

    const [beersAxios, setBeersAxios] = useState([])

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        setBeersAxios(response.data)
        console.log(response.data)
      })
  }, [])
  
  return (
    <div>
        {beersAxios.map((beers) => {
            return(
                <div>
                <h1>{beers.name}</h1>
                <Link to={`/${beers._id}`}>{beers.name}</Link>
                </div>
            )
        })}
    </div>
  )
}

export default BeerList