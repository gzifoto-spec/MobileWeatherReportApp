const BASE_URL = 'https://api.open-meteo.com/v1';

async function getCurrentWeather(lat, lon) {
    const url = `${BASE_URL}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;    

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching weather data');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getHourlyForecast(lat, lon) {
    const url = `${BASE_URL}/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code,relative_humidity_2m&timezone=auto&forecast_days=2`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching hourly forecast');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
        
    }
}

async function getDailyForecast(lat, lon) {
    const url = `${BASE_URL}/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=7`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching daily forecast');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}