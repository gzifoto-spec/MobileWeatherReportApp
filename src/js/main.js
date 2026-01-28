async function initializeApp() {
    try {
        showLoading();
        
        let latitude, longitude, locationName;
        
        try {
            const position = await getCurrentPosition();
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            locationName = 'Tu ubicación';
            console.log('Ubicación obtenida:', latitude, longitude);
        } catch (geoError) {
            console.warn('No se pudo obtener la ubicación. Usando A Coruña por defecto.');
            latitude = 43.3623;
            longitude = -8.4115;
            locationName = 'A Coruña';
        }
        
        const [currentWeather, hourlyForecast, dailyForecast] = await Promise.all([
            getCurrentWeather(latitude, longitude),
            getHourlyForecast(latitude, longitude),
            getDailyForecast(latitude, longitude)
        ]);
        
        displayCurrentWeather(currentWeather, locationName);
        displayHourlyForecast(hourlyForecast);
        displayDailyForecast(dailyForecast);
        
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('No se pudieron cargar los datos del clima. Por favor, recarga la página.');
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);

const locationBtn = document.getElementById('locationBtn');
if (locationBtn) {
    locationBtn.addEventListener('click', () => {
        initializeApp();
    });
}