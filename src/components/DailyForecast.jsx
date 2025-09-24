import Days from "./Days"

const reports = [
    {
        day: "Tue",
        temp1: 68,
        temp2: 25
    },
    {
        day: "Wed",
        temp1: 27,
        temp2: 25
    },
    {
        day: "Thu",
        temp1: 27,
        temp2: 25
    },
    {
        day: "Fri",
        temp1: 27,
        temp2: 25
    },
    {
        day: "Sat",
        temp1: 27,
        temp2: 25
    },
    {
        day: "Sun",
        temp1: 27,
        temp2: 25
    },
    {
        day: "Mon",
        temp1: 27,
        temp2: 25
    },
]

function DailyForecast() {
    return (
        <div className="space-y-3 md:row-start-2 md:col-span-5">
            <h3 className="text-stone-100 text-lg">Daily forecast</h3>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-7 md:gap-5">
                {reports.map((report, i)=> (
                    <Days report={report} key={i} />
                ))}
            </div>
        </div>
    )
}

export default DailyForecast
