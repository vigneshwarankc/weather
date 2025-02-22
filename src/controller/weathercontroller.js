// controllers/weatherController.js
import { fetchWeatherData } from '../services/weatherservices';

const getWeather = async (city, apiKey) => {
  try {
    const data = await fetchWeatherData(city, apiKey);
    return { success: true, data }; // Return weather data
  } catch (error) {
    return { success: false, error: error.message }; // Return error message
  }
};

export { getWeather };
