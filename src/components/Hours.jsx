import { getWeatherMood } from "../utils/getWeatherMood";

function Hours({report}) {
    const {hour, temp, code} = report;
    const mood = getWeatherMood(code);

    return (
        <div className="flex items-center justify-between bg-[var(--clr--neutral--300)]/10 p-2 rounded-lg md:p-3">
            <div className="flex items-center">
                <img src={`./icon-${mood}.webp`} alt="sun" className="w-7 " />
                <p className="uppercase text-stone-200 text-lg">{hour} pm</p>
            </div>
            <p className="text-stone-300 text-sm">{temp}</p>
        </div>
    )
}

export default Hours
