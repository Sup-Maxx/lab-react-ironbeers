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
    <div>
      <h1>{beersAxios.name}</h1>
      <h3>{beersAxios.description}</h3>
      <h4><em>{beersAxios.tagline}</em></h4>
      <h5>First brewed in {beersAxios.first_brewed}</h5>
      <h5>{beersAxios.attenuation_level}/100</h5>
    </div>
  )
}

export default BeerIndividual