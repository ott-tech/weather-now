import { formatDate, getWeatherDescription, convertTemp, getWeatherIcon } from "../utils/helpers";
import { useUnit } from "../Context/UnitContext";
import * as WeatherIcons from 'react-icons/wi';

function DailyForecast ({data}) {
    const { unit } = useUnit()
    
    if (!data) return null;

    return (
        <div className="daily-forecast">
            <h2>Daily Forecast</h2>
            <div className="forecast-grid">
                {data.time.map((date, index) => {
                    const iconName = getWeatherIcon(data.weather_code[index]);
                    const IconComponent = WeatherIcons[iconName];

                    return (
                        <div key={date} className="forecast-card">
                            <p className="forecast-date">{formatDate(date)}</p>
                            <p className="forecast-code">{getWeatherDescription(data.weather_code[index])}</p>
                            <IconComponent size={48} color="goldenrod" />
                            <p className="forecast-temp-max">High: {convertTemp(data.temperature_2m_max[index], unit)}{unit === 'metric' ? '°C' : '°F'}</p>
                            <p className="forecast-temp-min">Low: {convertTemp(data.temperature_2m_min[index], unit)}{unit === 'metric' ? '°C' : '°F'}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DailyForecast;