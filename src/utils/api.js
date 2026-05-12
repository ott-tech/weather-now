export const getCoordinates = async(cityName) => {
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`
        const response = await fetch (url) 

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (!data.results || data.results.length === 0) {
            throw new Error (`${cityName} not found`)
        }

        return data.results?.[0];
    }
    catch (error) {
        console.log("Geocoding error:", error)
        throw error
    }
}

export const getWeather = async(latitude, longitude) => {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`

        const response = await fetch (url) 

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data;
    }
    catch (error) {
        console.log("Weather error:", error)
        throw error
    }
}
