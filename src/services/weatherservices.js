import { baseurl } from "../const";

// services/weatherService.js
const fetchWeatherData = async (city, apiKey) => {
    const response = await fetch(
      `${baseurl}weather?q=${city}&appid=${apiKey}&units=metric`
    );
  
    const data = await response.json();
  
    if (response.ok) {
      return data; // Return weather data
    } else {
      throw new Error(data.message || 'City not found');
    }
  };
  
  export { fetchWeatherData };
  