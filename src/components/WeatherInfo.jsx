import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import Today from "./today"



function WeatherInfo({weather,location}) {

    if(!weather) return null

    return (
        <main className="mt-10 grid gap-6 md:grid-cols-7">
            <Today location={location} weather={weather} />
            <DailyForecast weather={weather} />
            <HourlyForecast weather={weather} />
        </main>
    )
}




export default WeatherInfo
