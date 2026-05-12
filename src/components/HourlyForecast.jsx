import { useState } from "react";
import { formatTime, getWeatherDescription, convertTemp, getWeatherIcon } from "../utils/helpers";
import { useUnit } from "../Context/UnitContext";
import * as WeatherIcons from 'react-icons/wi';

function HourlyForecast ({data}) {
    const [selectedDay, setSelectedDay] = useState(0);

    const { unit } = useUnit()

    if (!data) return null;

    const handleDayChange = (event) => {
        setSelectedDay(Number(event.target.value));
    };
    
    const startIndex = selectedDay * 24;
    const endIndex = startIndex + 24;

    const hoursToShow = data.time.slice(startIndex, endIndex)

    return (
        <div className="hourly-forecast-container">
            <div className="hourly-header">
                <h2>Hourly Forecast</h2>
                <select value={selectedDay} onChange={handleDayChange}>
                    {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                        <option key={day} value={day}>
                            Day {day}
                        </option>
                    ))}
                </select>
            </div>

            <div className="hourly-grid">
                {hoursToShow.map((time, index) => {
                    const actualIndex = startIndex + index;

                    const iconName = getWeatherIcon(data.weather_code[actualIndex]);
                    const IconComponent = WeatherIcons[iconName];
                    
                    return (
                        <div key={time} className="hourly-card">
                            <p className="forecast-time">{formatTime(time)}</p>
                            <p className="forecast-code">{getWeatherDescription(data.weather_code[actualIndex])}</p>
                            <IconComponent size={32} color="goldenrod" />
                            <p className="forecast-actual-temp">{convertTemp(data.temperature_2m[actualIndex], unit)}{unit === 'metric' ? '°C' : '°F'}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HourlyForecast;