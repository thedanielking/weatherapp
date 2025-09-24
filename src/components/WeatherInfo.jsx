import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import Today from "./today"



function WeatherInfo() {
    return (
        <main className="mt-10 grid gap-6 md:grid-cols-7">
            <Today />
            <DailyForecast />
            <HourlyForecast />
        </main>
    )
}




export default WeatherInfo
