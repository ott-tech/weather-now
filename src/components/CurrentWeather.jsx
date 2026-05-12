import { getWeatherDescription, convertTemp, getWeatherIcon, getWeatherGradient } from "../utils/helpers";
import { useUnit } from "../Context/UnitContext";
import * as WeatherIcons from 'react-icons/wi';

function CurrentWeather({ data, location, onAddFavourite }) {

  const { unit } = useUnit();

  if (!data || !location) return null;

  const temp = convertTemp(data.temperature_2m, unit);

  const iconName = getWeatherIcon(data.weather_code);
  const IconComponent = WeatherIcons[iconName];

  return (
    <div className={`current-weather ${getWeatherGradient(data.weather_code)}`}>
      <div className="location-info">
        <h2>{location.name}</h2>
        <p>{location.country}</p>
      </div>
      <div className="weather-main">
        <IconComponent size={64} color="goldenrod" />
        <span className="temperature">{temp}{unit === 'metric' ? '°C' : '°F'}</span>
        <button className="add-favourite-btn" onClick={() => onAddFavourite(location.name)}>
          Add to Favourites
        </button>
        <p className="description">{getWeatherDescription(data.weather_code)}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;