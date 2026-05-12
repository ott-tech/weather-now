import { convertSpeed, convertTemp } from "../utils/helpers";
import { useUnit } from "../Context/UnitContext";

function WeatherDetails({ data }) {

    const { unit } = useUnit();
    
    if (!data) return null;


    const feels_like = convertTemp(data.apparent_temperature, unit);

    const wind_speed = convertSpeed(data.wind_speed_10m, unit);

    return (
        <div className="weather-details">
            <h2>Weather Details</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <p className="detail-label">Feels Like</p>
                    <p className="detail-value">{feels_like}{unit === 'metric' ? '°C' : '°F'}</p>
                </div>
                <div className="detail-card">
                    <p className="detail-label">Wind Speed</p>
                    <p className="detail-value">{wind_speed}{unit === 'metric' ? 'km/h' : 'mph'}</p>
                </div>
                <div className="detail-card">
                    <p className="detail-label">Humidity</p>
                    <p className="detail-value">{data.relative_humidity_2m}%</p>
                </div>
                <div className="detail-card">
                    <p className="detail-label">Precipitation</p>
                    <p className="detail-value">{data.precipitation} mm</p>
                </div>
            </div>     
        </div>
    );
}

export default WeatherDetails;