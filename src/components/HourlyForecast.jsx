import { useState } from "react"
import Dropdown from "./Dropdown"
import Hours from "./Hours"
import { getDayRange } from "../utils/getDayRange"

function HourlyForecast({weather}) {
    const [showDropdown, setShowDropdown] = useState(false)
    const [day, setDay] = useState("Monday"); 

    const reports = getDayRange(weather.hourly, day)
    

    return (
        <div className="relative bg-[var(--clr--neutral--700)] p-4 rounded-xl flex flex-col gap-3 md:gap-5 md:col-span-2 md:row-span-2">
            <div className="flex items-center justify-between">
                <h3 className="text-lg text-stone-100">Hourly forecast</h3>
                <div className="rounded-lg bg-[var(--clr--neutral--50)]/20 px-2 py-1 cursor-pointer flex items-center gap-2 md:px-3 md:py-2"
                onClick={()=>setShowDropdown((show)=> !show)}>
                    <p className="text-sm text-stone-50  md:text-lg">{day}</p>
                    <img src="./icon-dropdown.svg" alt="dropdown" />
                </div>
            </div>

            {showDropdown && <Dropdown setDay={setDay} setShowDropdown={setShowDropdown} />}

            <div className="space-y-2 md:space-y-4">
                {reports.map((report, i)=> (
                    <Hours report={report} key={i} />
                ))}
            </div>

        </div>
    )
}

export default HourlyForecast
