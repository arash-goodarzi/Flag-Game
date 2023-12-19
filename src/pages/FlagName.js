import React from 'react'

const FlagName = ({itemsSelected, solution, setUserSelected, handleVerification}) => {
  return (
    <>
        <div className="h-1/2  flex justify-center my-5">
            <img className=' border-2' src={itemsSelected[solution]?.flags.svg} alt="flag"></img>
        </div>
        
        <div className="h-1/2 border-t-2 flex flex-col justify-around">
            <div className="flex md:flex-row flex-col gap-1 justify-around columns-3">
            {
                itemsSelected.map((item,index)=>(
                <div key={item.name.official} className="flex items-center">
                    <input id={item.name.common} onClick={(e)=>setUserSelected(item)} type="radio" value={item.name.common} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={item.name.common} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.name.common}</label>
                </div>

                ))
            }
            </div>
            <div className="flex justify-center items-end">
                <button onClick={()=>handleVerification("FlagName")} className='px-6 py-2 font-semibold text-white border-b-4 rounded shadow-lg bg-cyan-500 border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600'>check</button>
            </div>
            
        </div>      
    </>
  )
}

export default FlagName