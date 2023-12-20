import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Layout = ({Score, totalTries, itemsSelected, handleRestartGame, handleSelectChange}) => {

  return (
    <div className="App h-screen">
      <header className=' w-full h-1/6 flex flex-col justify-end items-center my-2'>
        <div className="h-1/2 flex items-center justify-around text-xs md:text-base lg:text-lg xl:text-xl text-black w-full">
          <NavLink exact to="/flag-game" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">FlagName</NavLink>
          <NavLink to="/namecapital" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameCapital</NavLink>
          <NavLink to="/namecurrency" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameCurrency</NavLink>
          <NavLink to="/nameregion" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameRegion</NavLink>
        </div>
        <div className="h-1/2 flex items-center justify-around md:text-xl  text-white w-1/2 rounded-lg bg-red-500">
          <div className="">
            Your Score: {Score}/{totalTries}
          </div>
          <div className="">
            <button onClick={handleRestartGame} className='font-semibold text-black bg-white border-b-4 border-amber-800 rounded shadow-lg shadow-amber-600/50 hover:border-amber-600 px-3'>ReStart</button>
          </div>
        </div>
      </header>
      <main className='w-full h-4/6 flex flex-col items-center justify-center'>
        {!itemsSelected?
          <div className="border-8 rounded-2xl border-y-red-500 shadow-2xl w-1/2 h-5/6 px-4 border-x-amber-400 flex flex-col text-center text-2xl">Loading...</div>
        
        :
          <div className="border-8 rounded-2xl border-y-red-500 shadow-2xl w-1/2 h-5/6 px-4 border-x-amber-400 flex flex-col">
             <Outlet />
          </div>
      
        }



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