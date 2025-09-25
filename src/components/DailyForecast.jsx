import Days from "./Days"



function DailyForecast({weather}) {
    return (
        <div className="space-y-3 md:row-start-2 md:col-span-5">
            <h3 className="text-stone-100 text-lg">Daily forecast</h3>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-7 md:gap-5">
                {weather && weather.daily && weather.daily.time && weather.daily.time.map((day, i) => (
                    <Days weather={weather} dayIndex={i} key={i} />
                ))}
            </div>
        </div>
    )
}

export default DailyForecast
