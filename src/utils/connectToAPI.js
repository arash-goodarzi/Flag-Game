const URL = "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,translations"

async function getData() {
    try {
        const res = await fetch(URL)
        if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
        const data = await res.json() 
        // Check if the 'common' property is available before accessing it
        if (data && data[0] && data[0].name && data[0].name.common) {
            // Access the 'common' property
            return data
            // Process the data
        } else {
            // Handle the case where the expected data is not available
            console.error('Data format is unexpected');
            // Display a user-friendly error message to the user
        }
        
    } catch (error) {
        console.log(error)
        return null
    } 
}

export default  getData