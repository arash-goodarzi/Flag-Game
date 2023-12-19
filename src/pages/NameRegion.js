import React from 'react'

const NameRegion = ({itemsSelected, solution, setUserSelected, handleVerification}) => {
  return (
    <>
        <div className="h-1/2  flex flex-col justify-center items-center my-5">
            <div className="text-center text-3xl font-bold">{itemsSelected[solution]?.name?.common}</div>
            <img className=' border-2 w-80 h-80 ' src={itemsSelected[solution]?.flags.svg} alt="flag"></img>
        </div>
        
        <div className="h-1/2 border-t-2 flex flex-col justify-around">
            <div className="flex md:flex-row flex-col gap-1 justify-around columns-3">
            {
                ["Oceania","Africa","Europe","Asia","Americas"].map((item,index)=>(
                    // <div className="item.name.capital">{item?.capital[0]?item?.capital[0]:"none"}</div>
                    
                <div key={item} className="flex items-center">
                    <input id={item} onClick={(e)=>setUserSelected(item)} type="radio" value={item} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={item} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
                </div>

                ))
            }
            </div>
            <div className="flex justify-center items-end">
                <button onClick={()=>handleVerification("NameRegion")} className='px-6 py-2 font-semibold text-white border-b-4 rounded shadow-lg bg-cyan-500 border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600'>check</button>
            </div>
        </div>      
    </>
  )
}

export default NameRegion