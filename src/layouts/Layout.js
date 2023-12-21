import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Layout = ({Score, totalTries, itemsSelected, handleRestartGame, handleSelectChange}) => {

  return (
    <div className="App h-screen flex flex-col gap-3">
      <header className='w-full  h-[20%]  flex flex-col justify-center items-center '>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-1">
          <div className="w-full h-1/2  flex items-center justify-around text-xs md:text-base lg:text-lg xl:text-xl text-black">
            <NavLink exact to="/flag-game" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black bg-red-400 py-2 px-1 rounded w-[24%]">FlagName</NavLink>
            <NavLink to="/namecapital" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black bg-red-400 py-2 px-1 rounded w-[24%]">NameCapital</NavLink>
            <NavLink to="/namecurrency" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black bg-red-400 py-2 px-1 rounded w-[24%]">NameCurrency</NavLink>
            <NavLink to="/nameregion" activeClassName="bg-yellow-500" className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in text-black bg-red-400 py-2 px-1 rounded w-[24%]">NameRegion</NavLink>
          </div>
          <div className=" w-full h-1/2 flex justify-center">
            <div className="w-[99%] flex items-center justify-around md:text-xl  text-white rounded-sm bg-red-500 py-1">
              <div className="w-[20%]">
                <select name="" id="" className='text-red-800 rounded-sm py-1 flex justify-center w-full' onChange={handleSelectChange} defaultValue={4}>
                  <option value="" disabled>number of options</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="">
                Your Score: {Score}/{totalTries}
              </div>
              <div className="">
                <button onClick={handleRestartGame} className='font-semibold text-black bg-white  rounded shadow-lg px-5 '>ReStart</button>
              </div>
            </div>
          </div>

        </div>
      </header>
      <main className='w-full h-[90%] flex flex-col items-center justify-center '>
        <div className="w-full md:w-1/2 h-full ">
          {!itemsSelected?
            <div className=" h-[95%]  border-8 rounded-2xl border-y-red-500 shadow-2xl px-4 border-x-amber-400 flex flex-col text-center text-2xl">Loading...</div>
          
          :
            <div className=" h-[95%]  border-8 rounded-2xl border-y-red-500 shadow-2xl px-4 border-x-amber-400 flex flex-col ">
              <Outlet />
            </div>
        
          }

        </div>
      </main>
    </div>
  )
}

export default Layout