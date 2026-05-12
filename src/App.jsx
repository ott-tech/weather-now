import useWeather from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import WeatherDetails from "./components/WeatherDetails";
import UnitToggle from "./components/UnitToggle";
import { useState, useEffect } from "react";
import Favourites from "./components/Favourites";
import { Routes, Route, Link } from 'react-router-dom';
import Skeleton from "./components/Skeleton";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { weather, error, loading, fetchWeather } = useWeather();

  const [favourites, setFavourites] = useState([])

  const LS_FAVOURITES_KEY = 'weather_dashboard_favourites'

    useEffect(()=> {
      const saved = localStorage.getItem(LS_FAVOURITES_KEY);
      if (saved) {
        setFavourites(JSON.parse(saved));
      }
  }, []);

  const deleteFavourite = (index) => {
    const updated = favourites.filter((city, i) => i !== index);
    setFavourites(updated);
    localStorage.setItem(LS_FAVOURITES_KEY, JSON.stringify(updated));
  };

  //Clear all
  const clearFavourites = () => {
    setFavourites([]);
    localStorage.removeItem(LS_FAVOURITES_KEY);
  };

  const addFavourites = (cityName) => {
    if (favourites.includes(cityName))
      return
    
      const updated = [...favourites, cityName]
      setFavourites(updated)
      localStorage.setItem(LS_FAVOURITES_KEY, JSON.stringify(updated))
    

  }


  return (
    <div className="app">
      <div className="top-bar">
        <div className="title">
          <img src = "https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt = "" height = "42px" width = "42px" />
          <h1>Weather Now</h1>
        </div>
        <ThemeToggle />
      </div>

      <p className="hero-text">How's the sky looking today?</p>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/favourites">Favourites</Link>
      </nav>
      <div className="header">
        <SearchBar onSearch={fetchWeather} />
        <UnitToggle />
        
      </div>

      <Routes>
        <Route path = "/" element = {
          <>

          
      {loading ? (
        <Skeleton />
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        weather && (
          <div className="weather-content">
            
            <CurrentWeather data={weather.current} location={weather.location} onAddFavourite={addFavourites} />
            <HourlyForecast data={weather.hourly} />
            <DailyForecast data={weather.daily} />
            <WeatherDetails data={weather.current} />
            
          </div>
        )
      )}
      </>
        }
        />
      
      <Route path = "/favourites" element = {
        <>
      <Favourites
        favourites = {favourites} 
        onSelect = {fetchWeather} 
        onDelete = {deleteFavourite} 
        onClear = {clearFavourites} 
      />
      </>
      } />
      </Routes>
    </div>
  
  );
}

export default App;
