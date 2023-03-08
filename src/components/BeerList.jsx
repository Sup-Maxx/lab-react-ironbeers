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
                <div className='beer-card'>
                    <Link className="link" to={`/${beers._id}`}>
                    {/* <img src={beers.image}/> */}
                    <h1>{beers.name}</h1>
                    <h4>{beers.tagline}</h4>
                    <p>{beers.contributed_by}</p>
                    </Link>

                </div>
            )
        })}
    </div>
  )
}

export default BeerList