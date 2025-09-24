import { useState } from "react"
import Dropdown from "./Dropdown"
import Hours from "./Hours"

const reports = [
    {
        time: "3pm",
        temp: 63,
    },
    {
        time: "4pm",
        temp: 62,
    },
    {
        time: "5pm",
        temp: 69,
    },
    {
        time: "6pm",
        temp: 68,
    },
    {
        time: "7pm",
        temp: 66,
    },
    {
        time: "8pm",
        temp: 67,
    },
    {
        time: "9pm",
        temp: 65,
    },
    {
        time: "10pm",
        temp: 64,
    },
]

function HourlyForecast() {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div className="relative bg-[var(--clr--neutral--700)] p-4 rounded-xl flex flex-col gap-3 md:gap-5 md:col-span-2 md:row-span-2">
            <div className="flex items-center justify-between">
                <h3 className="text-lg text-stone-100">Hourly forecast</h3>
                <div className="rounded-lg bg-[var(--clr--neutral--50)]/20 px-2 py-1 cursor-pointer flex items-center gap-2 md:px-3 md:py-2"
                onClick={()=>setShowDropdown((show)=> !show)}>
                    <p className="text-sm text-stone-50  md:text-lg">Tuesday</p>
                    <img src="./icon-dropdown.svg" alt="dropdown" />
                </div>
            </div>

            {showDropdown && <Dropdown />}

            <div className="space-y-2 md:space-y-4">
                {reports.map((report, i)=> (
                    <Hours report={report} key={i}  />
                ))}
            </div>

        </div>
    )
}

export default HourlyForecast
