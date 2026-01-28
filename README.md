# 🌤️ MobileWeatherReportApp

A modern, mobile-first weather application providing real-time weather information and forecasts.

![Weather App Preview](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)


## 📋 Description

MobileWeatherReportApp is a single-page application (SPA) that displays comprehensive weather information including:
- Current weather conditions for your location
- Hourly forecast for the next 24 hours
- Daily forecast for the next 7 days
- Automatic geolocation with fallback to default location
- Night mode weather icons (moon displayed between 10 PM - 6 AM)

<table>
<tr>
<th align="right" width="40%">
<p> 
<img height="555" alt="Screenshot From 2026-01-28 15-36-51" src="https://github.com/user-attachments/assets/9d846dc3-ef9e-41a6-9388-5488af6b04bf" />  
Mobile view
</p>
</th>
<th align="left" width="60%">
<p> 
Desktop view  
<img height="425" alt="Screenshot From 2026-01-28 15-35-18" src="https://github.com/user-attachments/assets/c66e29ec-021b-4771-ac55-018540e716ef" />
</p>
</th>
</tr>
</table>


## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with modern features
- **Bootstrap 5** - Responsive grid system
- **JavaScript (ES6+)** - Modern vanilla JavaScript

### API
- **[Open-Meteo API](https://open-meteo.com/)** - Free weather data API
  - No API key required
  - Real-time weather data
  - Hourly and daily forecasts
  - CORS enabled for browser requests

### Development Tools
- **Git & GitHub** - Version control
- **VS Code** - Code editor
- **Live Server** - Development server

## 🎨 Design

**Color Palette:**
- Primary Dark: `#1B3C53`
- Primary Medium: `#234C6A`
- Primary Light: `#456882`
- Neutral Light: `#E3E3E3`

**Design Philosophy:**
- Mobile-first responsive design
- Clean and modern interface
- Intuitive user experience
- Accessibility-focused

## 📦 Installation

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- Code editor (VS Code recommended)

### Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/MobileWeatherReportApp.git
```

2. **Navigate to the project directory:**
```bash
cd MobileWeatherReportApp
```

3. **Open with VS Code:**
```bash
code .
```

4. **Install Live Server extension** (if not already installed):
   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install the extension by Ritwick Dey

5. **Launch the application:**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - The app will open in your default browser at `http://127.0.0.1:5500`

### Alternative Setup (No Live Server)

Simply open `index.html` in your web browser. Note: Geolocation may not work with the `file://` protocol.

## 🎯 Features

### Current Weather
✅ Real-time temperature display  
✅ Weather condition description with emoji icons  
✅ Humidity percentage  
✅ Wind speed in km/h  
✅ Automatic location detection  

### Hourly Forecast
✅ Next 24 hours forecast  
✅ Temperature per hour  
✅ Weather conditions with icons  
✅ Horizontal scrollable layout  

### Daily Forecast
✅ 7-day weather forecast  
✅ Maximum and minimum temperatures  
✅ Weather condition icons  
✅ Date display in local format  

### Smart Features
✅ Night mode icons (moon icon for clear skies at night)  
✅ Fallback location (A Coruña, Spain) if geolocation fails  
✅ Responsive design for all screen sizes  
✅ Loading states and error handling  

## 📂 Project Structure
```
MobileWeatherReportApp/
├── src/
│   ├── css/
│   │   ├── styles.css           # Main stylesheet
│   │   └── responsive.css       # Responsive design rules
│   ├── js/
│   │   ├── main.js             # Application entry point
│   │   ├── api.js              # API communication layer
│   │   ├── ui.js               # UI rendering functions
│   │   └── utils.js            # Utility functions
│   └── assets/
│       ├── images/             # Image resources
│       └── icons/              # Icon resources
├── index.html                   # Main HTML file
├── README.md                    # Documentation (this file)
└── .gitignore                  # Git ignore rules
```

### File Responsibilities

**index.html**
- Semantic HTML5 structure
- Header, main content, and footer sections
- Script loading order (utils → api → ui → main)

**main.js**
- Application initialization
- Event handlers
- Orchestrates data flow between modules

**api.js**
- Open-Meteo API integration
- HTTP requests using Fetch API
- Error handling for network requests

**ui.js**
- DOM manipulation
- Weather data rendering
- Dynamic content creation

**utils.js**
- Geolocation wrapper
- Date and time formatting
- Weather code to description mapping
- Weather icon logic (including night mode)

## 🔧 Usage

### First Launch

1. When you open the app, it will request permission to access your location
2. **Allow** location access for accurate weather data
3. If denied, the app defaults to A Coruña, Spain

### Refresh Weather Data

- Click the **"Cambiar ubicación"** button in the header
- The app will request your location again and update all data

### Navigate Forecasts

- **Horizontal scroll** on mobile devices to view all hourly forecasts
- **Hover effects** on desktop for better interactivity

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🐛 Troubleshooting

### Location Not Working

**Problem:** Geolocation fails with error code 2

**Solutions:**
1. Check if location services are enabled in your OS
2. Verify browser has location permission
3. Ensure WiFi is enabled (browsers use WiFi for location)
4. Disable VPN if active

**Fallback:** The app automatically uses A Coruña coordinates if geolocation fails

### Data Not Loading

**Problem:** Weather data doesn't appear

**Solutions:**
1. Check internet connection
2. Open browser console (F12) to see error messages
3. Verify Open-Meteo API is accessible
4. Hard refresh the page (Ctrl+Shift+R)

### Styling Issues

**Problem:** CSS not loading properly

**Solutions:**
1. Clear browser cache
2. Check file paths in `index.html`
3. Ensure `src/css/` folder exists with both CSS files

## 🚧 Future Enhancements

Potential features for future versions:

- [ ] Manual city search functionality
- [ ] Save favorite locations
- [ ] Dark/Light theme toggle
- [ ] Temperature graphs and charts
- [ ] Weather alerts and notifications
- [ ] Multiple language support
- [ ] Weather radar integration
- [ ] Offline functionality with Service Workers

## 📊 API Reference

### Open-Meteo Endpoints Used

**Current Weather:**
```
GET https://api.open-meteo.com/v1/forecast
Parameters:
- latitude: float
- longitude: float
- current: temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m
- timezone: auto
```

**Hourly Forecast:**
```
GET https://api.open-meteo.com/v1/forecast
Parameters:
- latitude: float
- longitude: float
- hourly: temperature_2m,weather_code,relative_humidity_2m
- timezone: auto
- forecast_days: 2
```

**Daily Forecast:**
```
GET https://api.open-meteo.com/v1/forecast
Parameters:
- latitude: float
- longitude: float
- daily: temperature_2m_max,temperature_2m_min,weather_code
- timezone: auto
- forecast_days: 7
```

### Weather Codes (WMO)

| Code | Description |
|------|-------------|
| 0 | Clear sky |
| 1 | Mainly clear |
| 2 | Partly cloudy |
| 3 | Overcast |
| 45, 48 | Fog |
| 51-55 | Drizzle |
| 61-65 | Rain |
| 71-77 | Snow |
| 80-82 | Rain showers |
| 85-86 | Snow showers |
| 95-99 | Thunderstorm |

## 👨‍💻 Development

### Git Workflow

This project follows a feature branch workflow:
```
main (production)
  └── dev (development)
       ├── feature/html-structure
       ├── feature/css-styling
       ├── feature/javascript-utils
       ├── feature/api-integration
       ├── feature/ui-components
       └── feature/main-app-logic
```

### Commit Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Code Style

- **JavaScript:** ES6+ features, async/await for asynchronous code
- **CSS:** BEM-inspired naming, mobile-first approach
- **HTML:** Semantic elements, accessibility attributes

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Coding asistance by [Claude](https://claude.ai)
- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Color palette from [Color Hunt](https://colorhunt.co/)
- Icons: Native emoji support
- Bootstrap 5 for responsive grid system

## 📧 Contact

For questions, suggestions, or issues, please open an issue on GitHub.

---

**Made with ☀️ by [Xavier (Ghato)](https://github.com/gzifoto-spec)**  
*Academic Project - 2026*
