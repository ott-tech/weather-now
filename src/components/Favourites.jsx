import { useNavigate } from 'react-router-dom'

function Favourites ({ favourites, onSelect, onDelete, onClear }) {
    const navigate = useNavigate();
    if (favourites.length === 0) return null;

    return (
        <div className = "favourites">
            <h2>Favourites</h2>
            <button className="clear-all-btn" onClick = {onClear}>
                Clear All
            </button>
            {favourites.map((city, index) => (
                <div key = {city} className="favourite-item">
                    <button 
                        className="favourite-city-btn" 
                        onClick={() => {
                            onSelect(city);
                            navigate('/')
                        }}>
                        {city}
                    </button>
                    <button className="favourite-remove-btn" onClick={() => onDelete(index)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Favourites