
import React, { useState, useEffect } from 'react';
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
  
  const handleVerification = ()=>{
    setTotalTries((prev)=>prev+1)
    if (userSelected === itemsSelected[solution].name.common) {
      setScore((prev)=>prev+1)
    }
    return userSelected === itemsSelected[solution].name.common
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
            
            <div className="h-1/2  flex justify-center my-5">
              <img className=' border-2' src={itemsSelected[solution]?.flags.svg} alt="flag"></img>
            </div>
            
            <div className="h-1/2 border-t-2 flex flex-col justify-around">
              <div className="flex md:flex-row flex-col gap-1 justify-around columns-3">
                {
                  itemsSelected.map((item,index)=>(
                    <div key={item.name.official} className="flex items-center">
                        <input id={item.name.common} onClick={(e)=>setUserSelected(e.target.value)} type="radio" value={item.name.common} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor={item.name.common} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.name.common}</label>
                    </div>

                  ))
                }
              </div>
              <div className="flex justify-center items-end">
                <button onClick={handleVerification} className='px-6 py-2 font-semibold text-white border-b-4 rounded shadow-lg bg-cyan-500 border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600'>check</button>
              </div>
            </div>  

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
