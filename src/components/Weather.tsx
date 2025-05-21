import { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
  weathercode: number;
};

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then((res) => res.json())
        .then((data) => {
          const { temperature, weathercode } = data.current_weather;
          setWeather({ temperature, weathercode });
        });
    });
  }, []);
  if (!weather) return <p>Laddar väderdata</p>;

  return (
    <>
      <div>
        <h2>Vädret just nu</h2>
        <p>Temperatur: {weather.temperature} °C</p>
        <p>Kod: {weather.weathercode}</p>
      </div>
    </>
  );
};
