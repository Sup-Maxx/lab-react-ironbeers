import axios from "axios"
import React, { useEffect, useState } from 'react'

function RandomBeer() {

    const [beersAxios, setBeersAxios] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then(response => {
            setBeersAxios(response.data)
            console.log(response.data)
          })
      }, [])

    return (
        <div>
        <h1>This is my random beer</h1>
        <hr/>
          <img src={beersAxios.image_url} style={{width: "15%"}}/>
          <h1>{beersAxios.name}</h1>
          <h3>{beersAxios.description}</h3>
          <h4><em>{beersAxios.tagline}</em></h4>
          <h5>First brewed in {beersAxios.first_brewed}</h5>
          <h5>{beersAxios.attenuation_level}/100</h5>
        </div>
      )
}

export default RandomBeer