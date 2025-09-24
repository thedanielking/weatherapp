function Days({report}) {
    const {day, temp1, temp2} = report;

    return (
        <div className="bg-[var(--clr--neutral--700)] space-y-5 rounded-lg p-3 md:px-5 md:py-3 ">
            <div className="flex flex-col gap-2 items-center px-2">
                <p className="text-lg md:text-lg text-stone-300">{day}</p>
                <img src="icon-snow.webp" alt="snow" className="w-12" />
            </div>
            <div className="flex justify-between">
                <p className="text-sm text-stone-300">{temp1}</p>
                <p className="text-sm text-stone-300">{temp2}</p>
            </div>
        </div>
    )
}

export default Days
