import getData from './connectToAPI'

let apiData = []
let options = []
let cachedData = null

async function fetchData() {
    if (cachedData) {
        return cachedData
    } else {
        const data = await getData()
        cachedData = data
        return data
    }
}

async function chooseRandomItem(sourceList) {
    const randomNumber = Math.floor(Math.random() * sourceList?.length)
    const item = sourceList[randomNumber]
    return item
}

async function getOptions(apiData, optionsNumber) {
    try {
        let result = []
        while (result?.length < optionsNumber) {
            const item = await chooseRandomItem(apiData)
            const exist = await result.some(
                (i) => i.name.common === item.name.common
            )
            if (!exist) {
                result.push(item)
            }
        }
        return result
    } catch (error) {
        throw new Error('connection is weak!')
    }
}

async function chooseRandomItems(optionsNumber) {
    try {
        apiData = await fetchData()
        options = await getOptions(apiData, optionsNumber)

        const result = {
            selectedItems: options,
            randomForSolution: Math.floor(Math.random() * options?.length),
        }
        return result
    } catch (error) {
        throw new Error('connection is weak!')
    }
}

export { chooseRandomItems }
