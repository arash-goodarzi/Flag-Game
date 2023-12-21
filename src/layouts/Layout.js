import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Layout = ({Score, totalTries, itemsSelected, handleRestartGame, handleSelectChange}) => {

  return (
    <div className="App h-screen">
      <header className='w-full  h-[20%] flex flex-col justify-end items-center  landscape:h-[30%]'>
        <div className="md:w-1/2 w-5/6 h-1/2 landscape:w-full flex items-center justify-around text-xs md:text-base lg:text-lg xl:text-xl text-black">
          <NavLink exact to="/flag-game" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">FlagName</NavLink>
          <NavLink to="/namecapital" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameCapital</NavLink>
          <NavLink to="/namecurrency" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameCurrency</NavLink>
          <NavLink to="/nameregion" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black ">NameRegion</NavLink>
        </div>
        <div className="md:w-1/2 w-5/6 h-1/2 landscape:w-full flex items-center justify-around md:text-xl  text-white rounded-lg bg-red-500">
          <div className="">
            Your Score: {Score}/{totalTries}
          </div>
          <div className="">
            <button onClick={handleRestartGame} className='font-semibold text-black bg-white border-b-4 rounded shadow-lg px-5 landscape:px-10'>ReStart</button>
          </div>
        </div>
      </header>
      <main className='w-full h-[70%] flex flex-col items-center justify-center landscape:h-[70%]'>
        {!itemsSelected?
          <div className="md:w-1/2 md:h-5/6 w-5/6 h-[95%] landscape:w-full border-8 rounded-2xl border-y-red-500 shadow-2xl px-4 border-x-amber-400 flex flex-col text-center text-2xl">Loading...</div>
        
        :
          <div className="md:w-1/2 md:h-5/6 w-5/6 h-[95%] landscape:w-full border-8 rounded-2xl border-y-red-500 shadow-2xl px-4 border-x-amber-400 flex flex-col">
             <Outlet />
          </div>
      
        }
      </main>
      <footer className='w-full h-[10%] flex justify-center items-center landscape:invisible'>
        <div className="md:w-1/2 w-5/6 h-full bg-red-500 text-white flex justify-center items-center">
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