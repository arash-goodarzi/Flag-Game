const URL = "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,translations"

async function getData() {
    try {
        const res = await fetch(URL)
        const data = await res.json() 

        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

export default  getData