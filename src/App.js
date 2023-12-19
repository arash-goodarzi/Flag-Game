
import React, { useState, useEffect } from 'react';
import FlagName from './pages/FlagName.js';
import NameCapital from './pages/NameCapital.js';
import NameRegion from './pages/NameRegion.js';
import NameCurrency from './pages/NameCurrency.js';
const { chooseRandomItems } = require('./utils/gameLogic.js');

function App() {
  const NUMBEROFCHOOSE = 4

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

    console.log("flag",flag)

    if (flag === 'FlagName') {
      if (userSelected.name.common === itemsSelected[solution].name.common) {
        setScore((prev)=>prev+1)
      } 
      
    } else if( flag === 'NameCapital'){
      if (userSelected.name.common === itemsSelected[solution].name.common) {
        setScore((prev)=>prev+1)
      }
    } else if (flag === 'NameRegion') {

      // itemsSelected[solution].region
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
    <div className="App h-screen">
      <header className='bg-amber-400 w-full h-1/6 flex flex-col justify-center items-center'>
        <div className="h-1/2 flex items-center bg-black text-white w-full"></div>
        <div className="h-1/2 flex items-center">Your Score: {Score}/{totalTries}</div>
      </header>
      <main className='w-full h-4/6 flex flex-col items-center justify-center'>
        {!itemsSelected?
          <div className="border-8 rounded-2xl border-y-red-500 shadow-2xl w-1/2 h-3/4 px-4 py-2 border-x-amber-400 flex flex-col">Loading</div>
        
        :
          <div className="border-8 rounded-2xl border-y-red-500 shadow-2xl w-1/2 h-3/4 px-4 py-2 border-x-amber-400 flex flex-col">
            
            <FlagName itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  />
            {/* <NameCapital itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  /> */}
            {/* <NameRegion itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  /> */}
            {/* <NameCurrency itemsSelected={itemsSelected} solution={solution} setUserSelected={setUserSelected} handleVerification={handleVerification}  /> */}
          </div>
      
        }

        <div className="mt-8 mx-6 my-2">
            <button onClick={handleRestartGame} className='px-6 py-2  font-semibold text-white bg-purple-500 border-b-4 border-purple-800 rounded shadow-lg shadow-purple-600/50 hover:border-purple-600'>Start the Game</button>
        </div>

      </main>
      <footer className='w-full bg-red-500 text-white h-1/6 flex justify-center items-center'>
        <div className=" ">
          <select name="" id="" className='text-red-800 rounded-sm px-2 py-1 flex justify-center' onChange={handleSelectChange} defaultValue={4}>
            <option value="" disabled>number of options</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </footer>
    </div>
  );
}

export default App;
