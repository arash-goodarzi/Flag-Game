import React from 'react'

const NameCapital = ({
    itemsSelected,
    solution,
    setUserSelected,
    handleVerification,
}) => {
    return (
        <>
            <div className="flex h-2/5 flex-col items-center justify-around landscape:flex-row landscape:justify-around">
                <div className="text-3xl font-bold ">
                    {itemsSelected[solution]?.name?.common}
                </div>
                <div className="">
                    <img
                        className="h-full max-h-full max-w-full landscape:w-24"
                        src={itemsSelected[solution]?.flags.svg}
                        alt="flag"
                    ></img>
                </div>
            </div>

            <div className="flex h-3/5 flex-col justify-around border-t-2">
                <div className="3xl:flex-row flex flex-col justify-around gap-1 lg:grid lg:grid-cols-2 landscape:flex-row">
                    {itemsSelected.map((item, index) => (
                        <div
                            key={item?.capital[0]}
                            className="flex items-center rounded-md px-2 transition-all duration-200 ease-in hover:bg-gray-400 hover:pb-1"
                        >
                            <input
                                id={
                                    item?.capital[0] ? item?.capital[0] : 'none'
                                }
                                onClick={(e) => setUserSelected(item)}
                                type="radio"
                                value={
                                    item?.capital[0] ? item?.capital[0] : 'none'
                                }
                                name="default-radio"
                                className="h-4 w-4 hover:cursor-pointer  focus:ring-2 focus:ring-cyan-500"
                            />
                            <label
                                htmlFor={
                                    item?.capital[0] ? item?.capital[0] : 'none'
                                }
                                className="w-fill ms-2 text-sm font-medium text-gray-900 hover:cursor-pointer dark:text-gray-300 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                            >
                                {item?.capital[0] ? item?.capital[0] : 'none'}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex items-end justify-center">
                    <button
                        onClick={() => handleVerification('NameCapital')}
                        className="rounded border-b-4 border-cyan-800 bg-red-500 px-16 py-2 font-semibold text-white shadow-lg shadow-cyan-600/50 hover:border-cyan-600"
                    >
                        check
                    </button>
                </div>
            </div>
        </>
    )
}

export default NameCapital
