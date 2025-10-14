import { useEffect, useState } from "react"

function useWeatherForecast(lat, lng, days = 7, retryCount) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(()=>{
        if(!lat || !lng) return;

        //for aborting more web requests when we want 
        const controller = new AbortController(); 

        async function fetchWeather(){
            setLoading(true);
            setError(null);

            try{
                const params = new URLSearchParams({
                    latitude: lat.toString(),
                    longitude: lng.toString(),
                    hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code",
                    daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code,wind_speed_10m_max,wind_speed_10m_min,wind_speed_10m_mean,relative_humidity_2m_max,relative_humidity_2m_min,relative_humidity_2m_mean",
                    temperature_unit: "celsius", // fahrenheit
                    windspeed_unit: "kmh", // or mph
                    precipitation_unit: "mm", // or inches
                    timezone: "auto",
                    forecast_days: days.toString(),
                })

                const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
                if(!res.ok) throw new Error("Weather fetch failed");

                const data = await res.json();
                setWeather(data);
            } catch(err){
                if(err.name !== "AbortError"){
                    setError(err.message);
                }
            }finally{
                setLoading(false)
            }
        }

        fetchWeather();

        //cleanup if component umounts
        return ()=> controller.abort();

    },[lat, lng, days, retryCount])


    return {weather, loading, error}
}

export default useWeatherForecast
