function Skeleton() {
    return (
        <div className="weather-content">
            <div className="current-weather skeleton-card">
                <div className="skeleton" style={{ height: '2rem', width: '40%', margin: '0 auto 1rem' }}></div>
                <div className="skeleton" style={{ height: '4rem', width: '4rem', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
                <div className="skeleton" style={{ height: '4rem', width: '30%', margin: '0 auto 1rem' }}></div>
                <div className="skeleton" style={{ height: '1rem', width: '50%', margin: '0 auto' }}></div>
            </div>

            <div className="weather-details">
                <div className="skeleton" style={{ height: '1rem', width: '60%', marginBottom: '2rem' }}></div>
                <div className="details-grid">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="detail-card">
                            <div className="skeleton" style={{ height: '0.8rem', width: '50%', marginBottom: '0.5rem' }}></div>
                            <div className="skeleton" style={{ height: '1.5rem', width: '40%' }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="daily-forecast">
                <div className="skeleton" style={{ height: '1rem', width: '60%', marginBottom: '2rem' }}></div>
                <div className="daily-grid">
                    {[1,2,3,4,5,6,7].map(i => (
                        <div key={i} className="daily-card">
                            <div className="skeleton" style={{ height: '0.8rem', width: '50%', marginBottom: '0.5rem' }}></div>
                            <div className="skeleton" style={{ height: '1.5rem', width: '40%' }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hourly-forecast">
                
                <div className="hourly-grid">
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="hourly-card">
                            <div className="skeleton" style={{ height: '0.8rem', width: '50%', marginBottom: '0.5rem' }}></div>
                            <div className="skeleton" style={{ height: '1.5rem', width: '40%' }}></div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Skeleton