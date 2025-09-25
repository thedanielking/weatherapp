import useWeatherForecast from "../hook/useWeatherForecast"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import Today from "./today"



function WeatherInfo() {


    const {weather, loading, error} = useWeatherForecast(6.5244, 3.3792, 7);

    if(loading) return <p>Loading Weather</p>
    if(error) return <p>Error: {error}</p>
    if(!weather) return null

    return (
        <main className="mt-10 grid gap-6 md:grid-cols-7">
            <Today />
            <DailyForecast weather={weather} />
            <HourlyForecast weather={weather} />
        </main>
    )
}




export default WeatherInfo
