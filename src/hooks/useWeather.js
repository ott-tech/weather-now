import { useState, useEffect } from "react"
import { getCoordinates, getWeather } from "../utils/api"

const useWeather = () => {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchWeather = async(cityName) => {
        try {
            setLoading(true)
            setError(null)

            const coordinates = await getCoordinates(cityName)
            if (!coordinates) {
                setError("City not found")
                return
            }
            const weatherData = await getWeather(coordinates.latitude, coordinates.longitude)
            setWeather({
                location: {
                    name: coordinates.name,
                    country: coordinates.country,
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                },
                current: weatherData.current, // temperature, humidity, wind, etc.
                hourly: weatherData.hourly, // hourly temperature, precipitation, etc.
                daily: weatherData.daily, // daily temperature, precipitation, etc. 
            })
        } catch (error) {
            console.log("Error fetching weather data:", error)
            setLoading(error.message || "Failed to fetch weather data")
        } finally {
            setLoading(false)
        }
    }

        useEffect(() => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        async (position) => {
                            setLoading(true);
                            setError(null);
                            const {latitude, longitude} = position.coords;
                            const weatherData = await getWeather(latitude, longitude);
                            setWeather ({
                                location: {
                                    name: 'My Location',
                                    country: '',
                                    latitude,
                                    longitude
                                },
                                current: weatherData.current,
                                hourly: weatherData.hourly,
                                daily: weatherData.daily,
                            })
                            setLoading(false);
                        },
                        (error) => {
                            console.error("Error getting location:", error)
                            setLoading(false)
                        }
                    )
                }
            }, [])

    return { weather, error, loading, fetchWeather }
}



export default useWeather
