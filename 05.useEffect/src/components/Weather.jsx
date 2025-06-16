import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const city = "Gwangju";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const getWeatherData = async () => {
    try {
      const res = await axios.get(WEATHER_URL);
      setWeather(res.data);
    } catch (err) {
      console.error("날씨 정보 가져오기 실패:", err);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
      <h1>2025.06.11</h1>
      {weather ? (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="날씨 아이콘"
          />
          <p>현재 {weather.name}은 {weather.main.temp}℃ 입니다.</p>
        </>
      ) : (
        <p>날씨 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default Weather;
