function displayCurrentWeather(data, locationName = 'Tu ubicación') {
    const cityName = document.querySelector('.city-name');
    const tempValue = document.querySelector('.temp-value');
    const description = document.getElementById('weatherDescription');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    
    console.log('Current weather data:', data);
    
    if (!data.current) {
        console.error('No current data available');
        return;
    }
    
    const currentData = data.current;
    console.log('Current data:', currentData);
    
    const weatherDesc = getWeatherDescription(currentData.weather_code);
    const weatherIcon = getWeatherIcon(currentData.weather_code);
    
    cityName.textContent = locationName;
    tempValue.textContent = Math.round(currentData.temperature_2m);
    description.querySelector('p').textContent = `${weatherIcon} ${weatherDesc}`;
    humidity.textContent = `${currentData.relative_humidity_2m}%`;
    windSpeed.textContent = `${Math.round(currentData.wind_speed_10m)} km/h`;
}

function displayHourlyForecast(data) {
    const container = document.getElementById('hourlyContainer');
    container.innerHTML = '';
    
    const hourlyData = data.hourly;
    
    for (let i = 0; i < 24; i++) {
        const hourCard = document.createElement('div');
        hourCard.className = 'forecast-card';
        
        const temp = Math.round(hourlyData.temperature_2m[i]);
        const weatherCode = hourlyData.weather_code[i];
        const time = formatTime(hourlyData.time[i]);
        const icon = getWeatherIcon(weatherCode);
        
        hourCard.innerHTML = `
            <p class="forecast-time">${time}</p>
            <p class="forecast-icon">${icon}</p>
            <p class="forecast-temp">${temp}°C</p>
        `;
        container.appendChild(hourCard);
    }
}

function displayDailyForecast(data) {
    const container = document.getElementById('dailyContainer');
    container.innerHTML = '';
    
    const dailyData = data.daily;
    
    for (let i = 0; i < dailyData.time.length; i++) {
        const dayCard = document.createElement('div');
        dayCard.className = 'forecast-card';
        
        const maxTemp = Math.round(dailyData.temperature_2m_max[i]);
        const minTemp = Math.round(dailyData.temperature_2m_min[i]);
        const weatherCode = dailyData.weather_code[i];
        const date = formatDate(dailyData.time[i]);
        const icon = getWeatherIcon(weatherCode);
        
        dayCard.innerHTML = `
            <p class="forecast-day">${date}</p>
            <p class="forecast-icon">${icon}</p>
            <p class="forecast-temp">${maxTemp}° / ${minTemp}°</p>
        `;
        container.appendChild(dayCard);
    }
}

function showError(message) {
    alert(message);
}

function showLoading() {
    document.querySelector('.city-name').textContent = 'Cargando...';
}