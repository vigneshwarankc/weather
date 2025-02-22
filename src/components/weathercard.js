// components/WeatherCard.js
import React, { useState, useEffect } from 'react';
import { getWeather } from '../controller/weathercontroller';
import { apiKey } from '../const';

const WeatherCard = ({ id, onClose, username }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null); 

   
    const result = await getWeather(city, apiKey);

    if (result.success) {
      setWeather(result.data);
    } else {
      setError(result.error);
      setWeather(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    const storedCity = localStorage.getItem(`city-${id}`);
    if (storedCity) {
      setCity(storedCity);
    }
  }, [id]);

  useEffect(() => {
    if (city) {
      localStorage.setItem(`city-${id}`, city);
    }
  }, [city, id]);

  return (
    <div className="card">
      <button className="close-btn" onClick={() => onClose(id)}>
        X
      </button>
      <h3>Weather Card - {username}</h3>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)} 
      />
      <button onClick={fetchWeather}>Search</button>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : weather ? (
        <div>
          <p>{weather.name}</p>
          <p>{weather.weather[0].description}</p>
          <p>Temp: {weather.main.temp}°C</p>
        </div>
      ) : (
        <div>No weather data available</div>
      )}
    </div>
  );
};

export default WeatherCard;
