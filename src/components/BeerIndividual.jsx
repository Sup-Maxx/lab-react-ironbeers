import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'


function BeerIndividual() {

    const { beerId } = useParams()

    const [beersAxios, setBeersAxios] = useState([])

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        setBeersAxios(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <div className='ind-beer'>
      <img src={beersAxios.image_url} style={{width: "65px"}}/>
      <h5>{beersAxios.attenuation_level}/100</h5>
      <h1>{beersAxios.name}</h1>
      <h5>First brewed in {beersAxios.first_brewed}</h5>
      <p><em>{beersAxios.tagline}</em></p>
      <h5 style={{width: "60ch"}}>{beersAxios.description}</h5>
    </div>
  )
}

export default BeerIndividual