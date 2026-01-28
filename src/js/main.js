const { Promise } = require("winjs");

async function initializeApp() {
    try {
        showLoading();

        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;

        const [currentWeather, hourlyForecast, dailyForecast] = await Promise.all([
            getCurrentWeather(latitude, longitude),
            getHourlyForecast(latitude, longitude),
            getDailyForecast(latitude, longitude)
        ]);

        displayCurrentWeather(currentWeather);
        displayHourlyForecast(hourlyForecast);
        displayDailyForecast(dailyForecast);

    } catch (error) {
        console.error('Error initializing app:', error);
        showError('No se pudo obtener tu ubicación. Por favor, permite el acceso a la ubicación.');
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);

document.getElementById('locationBtn').addEventListener('click', () => {
    initializeApp();
});