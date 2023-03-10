import logo from './logo.svg';
import './App.css';

import {Link, Route, Routes, useLocation} from "react-router-dom"
import axios from "axios"
import BeerList from './components/BeerList';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import BeerIndividual from './components/BeerIndividual';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'

import homeIcon from "../src/assets/home.png"
import beers from "../src/assets/beers.png"
import newBeer from "../src/assets/new-beer.png"
import randomBeer from "../src/assets/random-beer.png"
import { LinearProgress } from '@mui/material';
import { Button } from 'antd';
import BeerButton from './components/BeerButton';




function App() {

  const {pathname} = useLocation()
  console.log(pathname)
  
  return (
    <div className="App">

    <NavBar linkTo="/" picture={homeIcon} width={"60px"}></NavBar>

      <Routes>
        <Route path="/beers" element={<BeerList/>} />
        <Route path="/:beerId" element={<BeerIndividual/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>

    </div>
  );
}

export default App;
