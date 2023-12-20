import React from 'react'

const NameRegion = ({itemsSelected, solution, setUserSelected, handleVerification}) => {
  return (
    <>
        <div className="h-1/2  flex flex-col justify-center items-center my-5">
            <div className="text-center text-3xl font-bold">{itemsSelected[solution]?.name?.common}</div>
            <img className=' border-2 w-80 h-40' src={itemsSelected[solution]?.flags.svg} alt="flag"></img>
        </div>
        
        <div className="h-1/2 border-t-2 flex flex-col justify-around">
            <div className="flex md:flex-row flex-col gap-1 justify-around columns-3">
            {
                ["Oceania","Africa","Europe","Asia","Americas"].map((item,index)=>(                 
                <div key={item} className="flex items-center hover:border-b-2 hover:border-black transition-all duration-200 ease-in hover:pb-1 hover:bg-slate-300">
                    <input id={item} onClick={(e)=>setUserSelected(item)} type="radio" value={item} name="default-radio" className="hover:cursor-pointer w-4 h-4  focus:ring-cyan-500 focus:ring-2" />
                    <label htmlFor={item} className="hover:cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 md:text-base lg:text-base xl:text-lg 2xl:text-xl">{item}</label>
                </div>

                ))
            }
            </div>
            <div className="flex justify-center items-end">
                <button onClick={()=>handleVerification("NameRegion")} className='px-6 py-2 font-semibold text-white border-b-4 rounded shadow-lg bg-cyan-500 border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl lg:px-12 lg:py-3'>check</button>
            </div>
        </div>      
    </>
  )
}

export default NameRegion