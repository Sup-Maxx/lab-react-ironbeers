import logo from './logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom"
import axios from "axios"
import BeerList from './components/BeerList';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import BeerIndividual from './components/BeerIndividual';


function App() {

  
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path="/" element={<BeerList/>} />
        <Route path="/:beerId" element={<BeerIndividual/>}/>
      </Routes>
    </div>
  );
}

export default App;
