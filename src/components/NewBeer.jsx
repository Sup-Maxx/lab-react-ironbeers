import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function NewBeer() {

  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTip, setBrewersTip] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState("")
  const [contributedBy, setContributedBy] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const beerToPost = {name, tagline, description, first_brewed: firstBrewed, brewers_tips:brewersTip, attenuation_level: attenuationLevel, contributed_by: contributedBy}
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beerToPost)
      .then(() => {
        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTip("")
        setAttenuationLevel("")
        setContributedBy("")

      
      })
      .catch((error) => console.log("error is: ",error))
  }

  return (
    <div className='form'>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
          Tagline: 
          <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
        </label>

        <label>
          Description: 
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>

        <label>
          Firstly brewed: 
          <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
        </label>

        <label>
          Brewers Tip: 
          <input type="text" value={brewersTip} onChange={(e) => setBrewersTip(e.target.value)}/>
        </label>

        <label>
          Attenuation Level: 
          <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)}/>
        </label>

        <label>
          Contributed By: 
          <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)}/>
        </label>

        <button>Add your new beer</button>
      </form>
    </div>
  )
}

export default NewBeer