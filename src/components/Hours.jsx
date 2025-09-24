function Hours({report}) {
    const {temp, time} = report;

    return (
        <div className="flex items-center justify-between bg-[var(--clr--neutral--300)]/10 p-2 rounded-lg md:p-3">
            <div className="flex items-center">
                <img src="./icon-sunny.webp" alt="sun" className="w-7 " />
                <p className="uppercase text-stone-200 text-lg">{time}</p>
            </div>
            <p className="text-stone-300 text-sm">{temp}</p>
        </div>
    )
}

export default Hours
