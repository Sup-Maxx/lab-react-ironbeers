import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import {Card, Col, Button} from "antd"


function BeerList() {

    const [beersAxios, setBeersAxios] = useState([])

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        setBeersAxios(response.data)
/*         console.log(response.data)
 */      })
  }, [])
  
  return (
    <div>

        {beersAxios.map((beers) => {
          
            return(
              <Col className='column'>
                <Card title={beers.name} style={{width: 230, margin: "10px 25px", }}>
                <img src={beers.image_url} style={{width: "65px"}}/>
                <p><em>{beers.tagline}</em></p>

                <Button type="primary"> 
                  <Link to={`/${beers._id}`}>Know more</Link>
                </Button>

                </Card>
              </Col>
                
            )
        })}
    </div>
  )
}

export default BeerList