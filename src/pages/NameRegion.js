import React from 'react'

const NameRegion = ({itemsSelected, solution, setUserSelected, handleVerification}) => {
  return (
    <>
        <div className="h-2/5 flex flex-col justify-around landscape:justify-around landscape:flex-row items-center">
            <div className="text-3xl font-bold ">
                    {itemsSelected[solution]?.name?.common}
            </div>
            <div className="">
                <img className='border-2 max-w-full max-h-full landscape:w-24' src={itemsSelected[solution]?.flags.svg} alt="flag"></img>
            </div>
        </div>    
        <div className="h-3/5 border-t-2 flex flex-col justify-around">
            <div className="gap-1 justify-around flex flex-col 3xl:flex-row lg:grid lg:grid-cols-2 landscape:flex-row">
                {
                    ["Oceania","Africa","Europe","Asia","Americas"].map((item,index)=>(                 
                    <div key={item} className="flex items-center hover:bg-gray-400 transition-all duration-200 ease-in hover:pb-1 rounded-md px-2">
                        <input id={item} onClick={(e)=>setUserSelected(item)} type="radio" value={item} name="default-radio" className="hover:cursor-pointer w-4 h-4  focus:ring-cyan-500 focus:ring-2" />
                        <label htmlFor={item} className="hover:cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl w-fill">{item}</label>
                    </div>
                    ))
                }
            </div>
            <div className="flex justify-center items-end">
                <button onClick={()=>handleVerification("NameRegion")} className='font-semibold text-white border-b-4 rounded shadow-lg bg-red-500 border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600 px-16 py-2'>check</button>
            </div>
        </div>      
    </>
  )
}

export default NameRegion