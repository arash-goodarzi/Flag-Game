import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Layout = ({Score, totalTries, itemsSelected, handleRestartGame, handleSelectChange}) => {

  return (
    <div className="App h-screen">
      <header className=' w-full h-1/6 flex flex-col justify-center items-center'>
        <div className="h-1/2 flex items-center justify-around text-xs md:text-base lg:text-xl xl:text-3xl text-black w-full">
          <NavLink exact to="/" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">FlagName</NavLink>
          <NavLink to="/namecapital" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameCapital</NavLink>
          <NavLink to="/namecurrency" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameCurrency</NavLink>
          <NavLink to="/nameregion" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameRegion</NavLink>
        </div>
        <div className="h-1/2 flex items-center justify-center md:text-3xl bg-black text-amber-400 w-1/2 rounded-lg font-bold">Your Score: {Score}/{totalTries}</div>
      </header>
      <main className='w-full h-4/6 flex flex-col items-center justify-center'>
        {!itemsSelected?
          <div className="border-8 rounded-2xl border-y-red-500 shadow-2xl w-1/2 h-3/4 px-4 py-2 border-x-amber-400 flex flex-col text-center text-2xl">Loading...</div>
        
        :
          <div className="border-8 rounded-2xl border-y-red-500 shadow-2xl w-1/2 h-3/4 px-4 py-2 border-x-amber-400 flex flex-col">
             <Outlet />
          </div>
      
        }

        <div className="mt-8 mx-6 my-2">
            <button onClick={handleRestartGame} className='px-6 py-2  font-semibold text-white bg-purple-500 border-b-4 border-purple-800 rounded shadow-lg shadow-purple-600/50 hover:border-purple-600 lg:text-lg xl:text-xl 2xl:text-2xl lg:px-12 lg:py-3'>Start the Game</button>
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
  )
}

export default Layout