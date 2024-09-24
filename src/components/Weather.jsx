import { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [weather, setWeather] = useState();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos = position.coords;

        const key = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${key}&units=metric&lang=kr`);

        const data = await response.json();
        let icon = "";

        switch (data.weather[0].main) {
          case "Thunderstorm":
            icon = <FontAwesomeIcon icon={faCloudBolt} className={styles.storm} />;
            break;
          case "Drizzle":
            icon = <FontAwesomeIcon icon={faCloudShowersHeavy} className={styles.cloud} />;
            break;
          case "Rain":
            icon = <FontAwesomeIcon icon={faCloudRain} className={styles.cloud} />;
            break;
          case "Snow":
            icon = <FontAwesomeIcon icon={faSnowflake} className={styles.snow} />;
            break;
          case "Atmosphere":
            icon = <FontAwesomeIcon icon={faSmog} className={styles.mist} />;
            break;
          case "Clear":
            icon = <FontAwesomeIcon icon={faSun} className={styles.sun} />;
            break;
          case "Clouds":
            icon = <FontAwesomeIcon icon={faCloud} className={styles.cloud} />;
            break;
        }

        setWeather({
          // 현재 날씨
          icon: icon,
          cur_weather: data.weather[0].main,
          // 온도
          temp: Math.floor(data.main.temp),
          // 습도
          humidity: Math.floor(data.main.humidity),
          // 현재 위치 (동)
          city: data.name,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  // 컴포넌트 실행이 완료된 후(JSX코드가 실행된 후) useEffect 실행
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className={styles.winfo}>
      <FontAwesomeIcon icon={faLocationDot} />
      {weather?.city} &nbsp; {weather?.icon} &nbsp;<label className={styles.data}>{weather?.temp}</label>ºC &nbsp;<label className={styles.data}>{weather?.humidity}</label>%
    </div>
  );
}
