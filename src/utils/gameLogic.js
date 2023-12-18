import { db } from "./data/db"

const chooRandomItem = (sourceList)=>{
    const randomNumber = Math.floor(Math.random()*sourceList.length)
    
    return sourceList[randomNumber]
}

const chooseRandomItems =(numberOfChoose,functionForSelect,data)=>{
    let result = [];

    while (result.length < numberOfChoose) {
        const item = functionForSelect(data)
        const exist = result.some(i =>i.name.common === item.name.common )
        if (!exist) {
            result.push(item)
        }
    }

    return result
}


export  {chooseRandomItems, chooRandomItem}
