import { useState } from "react";


function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === "") {
            return;
        }
        onSearch(city);
        setCity("");
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Search for a city..." 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;