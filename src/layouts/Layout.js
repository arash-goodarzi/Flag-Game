import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = ({
    Score,
    totalTries,
    itemsSelected,
    handleRestartGame,
    handleSelectChange,
}) => {
    return (
        <div className="App flex h-screen flex-col gap-3">
            <header className="flex  h-[20%]  w-full flex-col items-center justify-center">
                <div className="flex w-full flex-col items-start gap-1 lg:w-1/2">
                    <div className="flex h-1/2  w-full items-center justify-around text-xs text-black md:text-base lg:text-lg xl:text-xl">
                        <NavLink
                            exact
                            to="/flag-game"
                            activeClassName="bg-yellow-500"
                            className="w-[24%] rounded bg-red-400 px-1 py-2 text-black transition-all duration-200 ease-in hover:border-b-2 hover:border-black"
                        >
                            FlagName
                        </NavLink>
                        <NavLink
                            to="/namecapital"
                            activeClassName="bg-yellow-500"
                            className="w-[24%] rounded bg-red-400 px-1 py-2 text-black transition-all duration-200 ease-in hover:border-b-2 hover:border-black"
                        >
                            NameCapital
                        </NavLink>
                        <NavLink
                            to="/namecurrency"
                            activeClassName="bg-yellow-500"
                            className="w-[24%] rounded bg-red-400 px-1 py-2 text-black transition-all duration-200 ease-in hover:border-b-2 hover:border-black"
                        >
                            NameCurrency
                        </NavLink>
                        <NavLink
                            to="/nameregion"
                            activeClassName="bg-yellow-500"
                            className="w-[24%] rounded bg-red-400 px-1 py-2 text-black transition-all duration-200 ease-in hover:border-b-2 hover:border-black"
                        >
                            NameRegion
                        </NavLink>
                    </div>
                    <div className=" flex h-1/2 w-full justify-center">
                        <div className="flex w-[99%] items-center justify-around rounded-sm  bg-red-500 py-1 text-white md:text-xl">
                            <div className="w-[20%]">
                                <select
                                    name=""
                                    id=""
                                    className="flex w-full justify-center rounded-sm py-1 text-red-800"
                                    onChange={handleSelectChange}
                                    defaultValue={4}
                                >
                                    <option value="" disabled>
                                        number of options
                                    </option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="">
                                Your Score: {Score}/{totalTries}
                            </div>
                            <div className="">
                                <button
                                    onClick={handleRestartGame}
                                    className="rounded bg-white px-5  font-semibold text-black shadow-lg "
                                >
                                    ReStart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex h-[90%] w-full flex-col items-center justify-center ">
                <div className="h-full w-full  lg:w-1/2 ">
                    {!itemsSelected ? (
                        <div className=" flex  h-[80%] flex-col rounded-2xl border-8 border-x-amber-400 border-y-red-500 px-4 text-center text-2xl shadow-2xl">
                            Loading...
                        </div>
                    ) : (
                        <div className=" flex  h-[80%] flex-col rounded-2xl border-8 border-x-amber-400 border-y-red-500 px-4 shadow-2xl ">
                            <Outlet />
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Layout
