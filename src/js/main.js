let searchMode = false;

async function initializeApp(latitude = null, longitude = null, locationName = null) {
    try {
        showLoading();
        
        let lat, lon, name;
        
        if (latitude && longitude) {
            lat = latitude;
            lon = longitude;
            name = locationName || 'Ubicación seleccionada';
        } else {
            try {
                const position = await getCurrentPosition();
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                name = 'Tu ubicación';
                console.log('Ubicación obtenida:', lat, lon);
            } catch (geoError) {
                console.warn('No se pudo obtener la ubicación. Usando A Coruña por defecto.');
                lat = 43.3623;
                lon = -8.4115;
                name = 'A Coruña';
                
                setTimeout(() => showLocationWarning(), 1000);
            }
        }
        
        const [currentWeather, hourlyForecast, dailyForecast] = await Promise.all([
            getCurrentWeather(lat, lon),
            getHourlyForecast(lat, lon),
            getDailyForecast(lat, lon)
        ]);
        
        displayCurrentWeather(currentWeather, name);
        displayHourlyForecast(hourlyForecast);
        displayDailyForecast(dailyForecast);
        
        if (searchMode) {
            hideSearchForm();
        }
        
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('No se pudieron cargar los datos del clima. Por favor, recarga la página.');
    }
}

function showSearchForm() {
    const searchContainer = document.getElementById('searchContainer');
    const locationBtn = document.getElementById('locationBtn');
    
    searchContainer.style.display = 'flex';
    locationBtn.style.display = 'none';
    searchMode = true;
    
    document.getElementById('cityInput').focus();
}

function hideSearchForm() {
    const searchContainer = document.getElementById('searchContainer');
    const locationBtn = document.getElementById('locationBtn');
    const cityInput = document.getElementById('cityInput');
    
    searchContainer.style.display = 'none';
    locationBtn.style.display = 'block';
    searchMode = false;
    cityInput.value = '';
}

async function handleCitySearch() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();
    
    if (!cityName) {
        showError('Por favor, ingresa el nombre de una ciudad.');
        return;
    }
    
    if (cityName.length < 2) {
        showError('El nombre de la ciudad debe tener al menos 2 caracteres.');
        return;
    }
    
    try {
        showLoading();
        
        const cityData = await searchCity(cityName);
        
        console.log('Ciudad encontrada:', cityData);
        
        const displayName = cityData.admin1 
            ? `${cityData.name}, ${cityData.admin1}, ${cityData.country}`
            : `${cityData.name}, ${cityData.country}`;
        
        await initializeApp(cityData.latitude, cityData.longitude, displayName);
        
    } catch (error) {
        console.error('Error searching city:', error);
        
        if (error.message === 'City not found') {
            showError(`No se encontró la ciudad "${cityName}". Intenta con otro nombre.`);
        } else {
            showError('Error al buscar la ciudad. Por favor, intenta de nuevo.');
        }
        
        cityInput.focus();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    
    const locationBtn = document.getElementById('locationBtn');
    locationBtn.addEventListener('click', showSearchForm);
    
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', handleCitySearch);
    
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    closeSearchBtn.addEventListener('click', hideSearchForm);
    
    const cityInput = document.getElementById('cityInput');
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleCitySearch();
        }
    });
});