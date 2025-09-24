import Widget from "./Widget"

const widgets = [
    {
        name: "Feels like",
        value: "18*"
    },
    {
        name: "Humidity",
        value: "46%"
    },
    {
        name: "Wind",
        value: "14 Km/h"
    },
    {
        name: "Precipitation",
        value: "0 mm"
    }
]

function Today() {
    return (
       <div className="space-y-4 md:col-span-5">

        <div className="bg-cover bg-[var(--clr--secondary--100)] bg-[url(./bg-today-small.svg)] bg-blend-color rounded-xl p-5 md:py-15 md:px-10 md:bg-[url(./bg-today-large.svg)] ">
            <div className="flex flex-col items-center gap-4 py-5 md:flex-row md:justify-between ">
                <div className="space-y-2 md:space-y-4">
                    <h2 className="text-stone-100 font-medium text-2xl md:text-3xl">Berlin, Germany</h2>
                    <p className="text-stone-300 text-sm text-center font-medium md:text-left md:text-lg">Tuesday, Aug 5, 2025</p>
                </div>
                <div className="flex items-center justify-between">
                    <img src="./icon-sunny.webp" alt="sunny weather" className="w-30"  />
                    <span className="text-white font-medium text-8xl italic">20</span>
                    </div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-5">
            {widgets.map((widget, i)=> (
                <Widget widget={widget} key={i} />
            ))}
        </div>


      </div> 
    )
}

export default Today
