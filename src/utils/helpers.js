export const formatTime = (isoString) => {
    const date = new Date(isoString);

    const options = { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    }
    return date.toLocaleTimeString('en-US', options); 
}

export const formatDate = (isoString) => {
    const date = new Date(isoString);

    const options = { 
        weekday: 'short',
        month: 'short', 
        day: 'numeric' 
    }
    return date.toLocaleDateString('en-US', options); 
}

export const getWeatherIcon = (code) => {
    const icons = {
        0: 'WiDaySunny',
        1: 'WiDayCloudy',
        2: 'WiCloudy',
        3: 'WiCloudy',
        45: 'WiFog',
        48: 'WiFog',
        51: 'WiSprinkle',
        53: 'WiSprinkle',
        55: 'WiSprinkle',
        56: 'WiSleet',
        57: 'WiSleet',
        61: 'WiRain',
        63: 'WiRain',
        65: 'WiRainWind',
        66: 'WiSleet',
        67: 'WiSleet',
        71: 'WiSnow',
        73: 'WiSnow',
        75: 'WiSnowWind',
        77: 'WiSnowflakeCold',
        80: 'WiShowers',
        81: 'WiShowers',
        82: 'WiStormShowers',
        85: 'WiSnow',
        86: 'WiSnowWind',
        95: 'WiThunderstorm',
        96: 'WiThunderstorm',
        99: 'WiThunderstorm',
    }
    return icons[code] || 'WiCloudy'
}

export const getWeatherDescription = (code) => {
    const descriptions = {
        0: 'Clear Sky',
        1: 'Mainly Clear',
        2: 'Partly Cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing Fog',
        51: 'Light Drizzle',
        53: 'Moderate Drizzle',
        55: 'Dense Drizzle',
        56: 'Light Freezing Drizzle',
        57: 'Dense Freezing Drizzle',
        61: 'Light Rain',
        63: 'Moderate Rain',
        65: 'Heavy Rain',
        66: 'Light Freezing Rain',
        67: 'Heavy Freezing Rain',
        71: 'Light Snowfall',
        73: 'Moderate Snowfall',
        75: 'Heavy Snowfall',
        77: 'Snow Grains',
        80: 'Light Rain Showers',
        81: 'Moderate Rain Showers',
        82: 'Violent Rain Showers',
        85: 'Light Snow Showers',
        86: 'Heavy Snow Showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with Hail',
        99: 'Thunderstorm with Heavy Hail',
    }
    return descriptions[code] || 'Unknown weather condition'
}

export const convertTemp = (celsius, unit) => {
    if (unit === 'imperial') {
        return Math.round(celsius * 9/5 + 32);
    } else {
        return Math.round(celsius);
    }
};

export const convertSpeed = (km_h, unit) => {
    if (unit === 'imperial') {
        return Math.round(km_h / 1.60934);
    } else {
        return Math.round(km_h);
    }
}

export const getWeatherGradient = (code) => {
    const gradients = {
        0: 'gradient-clear', 
        1: 'gradient-cloudy',
        2: 'gradient-cloudy',
        3: 'gradient-cloudy',
        45: 'gradient-fog',
        48: 'gradient-fog',
        51: 'gradient-drizzle',
        53: 'gradient-drizzle',
        55: 'gradient-drizzle',
        56: 'gradient-drizzle',
        57: 'gradient-drizzle',
        61: 'gradient-rain',
        63: 'gradient-rain',
        65: 'gradient-rain',
        66: 'gradient-rain',
        67: 'gradient-rain',
        71: 'gradient-snow',
        73: 'gradient-snow',
        75: 'gradient-snow',
        77: 'gradient-snow',
        80: 'gradient-showers',
        81: 'gradient-showers',
        82: 'gradient-showers',
        85: 'gradient-showers',
        86: 'gradient-showers',
        95: 'gradient-thunderstorm',
        96: 'gradient-thunderstorm',
        99: 'gradient-thunderstorm',
    }
    return gradients[code] || 'gradient-clear'
}