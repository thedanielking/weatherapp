import { getWeatherMood } from "../utils/getWeatherMood";

function Days({weather, dayIndex}) {
    if (!weather || !weather.daily) {
        console.log("weather or weather.daily not ready", weather);
        return null; // or a loading indicator
    }
    const { time, temperature_2m_max: max, temperature_2m_min: min, weather_code: code } = weather.daily;
    

    const dateObject = new Date(time[dayIndex])
    const day = dateObject.toLocaleDateString('en-US', { weekday: 'short' });
    
    const maxTemp = max[dayIndex].toFixed(0);
    
    const minTemp = min[dayIndex].toFixed(0);
    const weatherCode = code[dayIndex];


    const mood = getWeatherMood(weatherCode);

    return (
        <div className="bg-[var(--clr--neutral--700)] space-y-5 rounded-lg p-3 md:px-5 md:py-3 ">
            <div className="flex flex-col gap-2 items-center px-2">
                <p className="text-lg md:text-lg text-stone-300">{day}</p>
                <img src={`icon-${mood}.webp`} alt="snow" className="w-12" />
            </div>
            <div className="flex justify-between">
                <p className="text-sm text-stone-300">{minTemp}</p>
                <p className="text-sm text-stone-300">{maxTemp}</p>
            </div>
        </div>
    )
}

export default Days
