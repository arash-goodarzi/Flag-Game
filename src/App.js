import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlagName  from './pages/FlagName'
import NameCapital from './pages/NameCapital';
import NameCurrency from './pages/NameCurrency';
import NameRegion from './pages/NameRegion';
import Layout from './layouts/Layout';
const { chooseRandomItems } = require('./utils/gameLogic.js');

function App() {
  const [itemsSelected, setItemsSelected] = useState([])
  const [userSelected, setUserSelected] = useState("")
  const [Score, setScore] = useState(0)
  const [totalTries, setTotalTries] = useState(0)
  const [optionsNumber, setOptionsNumber] = useState(4)
  const [solution, setSolution] = useState(0)

  useEffect(() => {
    let selectedItems;
    let randomForSolution;
    const loadingFromApi = async () =>{
      const {selectedItems, randomForSolution} = await chooseRandomItems(optionsNumber)

      setItemsSelected(selectedItems)
      setSolution(randomForSolution)
    }

    loadingFromApi()

    setItemsSelected(selectedItems)
    setSolution(randomForSolution)

  }, [totalTries,optionsNumber])
  
  const handleVerification = (flag)=>{
    setTotalTries((prev)=>prev+1)

    if (flag === 'FlagName') {
      if (userSelected.name.common === itemsSelected[solution].name.common) {
        setScore((prev)=>prev+1)
      } 
      
    } else if( flag === 'NameCapital'){
      if (userSelected.name.common === itemsSelected[solution].name.common) {
        setScore((prev)=>prev+1)
      }
    } else if (flag === 'NameRegion') {

      if (itemsSelected[solution].region===userSelected) {
        setScore((prev)=>prev+1)
      }
    } else if (flag === 'NameCurrency') {

      if (itemsSelected[solution]["currencies"] === null || itemsSelected[solution]["currencies"] === undefined ||  Object.keys(itemsSelected[solution]["currencies"]).length === 0  ) {
        if (userSelected === "None") setScore((prev)=>prev+1)
      } else  {

        if (itemsSelected[solution]["currencies"][Object.keys(itemsSelected[solution]["currencies"])[0]]?.name) {
          if(itemsSelected[solution]["currencies"][Object.keys(itemsSelected[solution]["currencies"])[0]]["name"] === userSelected)  setScore((prev)=>prev+1) 
        }
        
      }
    }
  }

  const handleSelectChange = (event) => {
    setOptionsNumber(event.target.value);
  };

  const handleRestartGame =()=>{
    setScore(0)
    setTotalTries(0)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout Score={Score} totalTries={totalTries} itemsSelected={itemsSelected} handleRestartGame={handleRestartGame} handleSelectChange={handleSelectChange}  />}>
          <Route path="flag-game"  element={<FlagName itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  />} />
          <Route path='namecapital' element={<NameCapital itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  />} />
          <Route path='namecurrency' element={<NameCurrency itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  />} />
          <Route path='nameregion' element={<NameRegion itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
