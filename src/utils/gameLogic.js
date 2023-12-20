
import getData from "./connectToAPI";

let apiData=[];
let options= []
const fetchData = async () => {
    const data = await getData();
    return data
};


async function chooseRandomItem (sourceList) {
    const randomNumber = Math.floor(Math.random()*sourceList?.length)
    const item =sourceList[randomNumber]
    return item
}

async function getOptions(apiData,optionsNumber) {
    let result = []
    while (result?.length < optionsNumber) {

        const item = await chooseRandomItem(apiData)
        const exist = await result.some(i =>i.name.common === item.name.common )
        if (!exist) {
            result.push(item)
        }
    }
    return result    
}


async function chooseRandomItems (optionsNumber) {
    apiData = await fetchData()
    options = await getOptions(apiData,optionsNumber)

    const result = {
        selectedItems: options,
        randomForSolution: Math.floor(Math.random()*options?.length)        
    }

    return result
}

export  {chooseRandomItems}
