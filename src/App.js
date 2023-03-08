import logo from './logo.svg';
import './App.css';

import {Link, Route, Routes} from "react-router-dom"
import axios from "axios"
import BeerList from './components/BeerList';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import BeerIndividual from './components/BeerIndividual';
import RandomBeer from './components/RandomBeer';




function App() {

  
  return (
    <div className="App">
      <NavBar linkTo="/" picture="./assets/home.png">Home</NavBar>
      <NavBar linkTo="/beers">Beers</NavBar>
      <NavBar linkTo="/random-beer">Random Beer</NavBar>
      <NavBar linkTo="/new-beer">New Beer</NavBar>
      


      <Routes>
        <Route path="/beers" element={<BeerList/>} />
        <Route path="/:beerId" element={<BeerIndividual/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
