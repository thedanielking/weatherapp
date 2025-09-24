export default function NavDropdown() {
    return <div className="absolute right-0 top-7  rounded-xl bg-[var(--clr--neutral--700)] space-y-1 p-2 w-[200px] z-5 md:top-15 md:w-[250px]">
        <button className="text-stone-300 text-lg py-1 px-3 bg-[var(--clr--stone--100)]/40 rounded-lg w-full text-left cursor-pointer">Switch to Imperial</button>
        <div className="space-y-2 py-2 border-b border-b-stone-500/40">
            <h5 className="text-stone-400">Temperature</h5>
            <div className="flex flex-col gap-2">
                <div className="text-stone-300 text-lg py-1 px-3 bg-[var(--clr--stone--100)]/40 rounded-lg flex items-center justify-between">
                    <p>Celsius('C)</p>
                    <img src="./icon-checkmark.svg" alt="checkmark" />
                </div>
                <p className="text-stone-300 text-lg py-1 px-3  rounded-lg">Fahrenheit('F)</p>
            </div>
        </div>
        <div className="space-y-2 py-2 border-b border-b-stone-500/40">
            <h5 className="text-stone-400">Wind Speed</h5>
            <div className="flex flex-col gap-2">
                <div className="text-stone-300 text-lg py-1 px-3 bg-[var(--clr--stone--100)]/40 rounded-lg flex items-center justify-between">
                    <p>km/h</p>
                    <img src="./icon-checkmark.svg" alt="checkmark" />
                </div>
                <p className="text-stone-300 text-lg py-1 px-3  rounded-lg">mph</p>
            </div>
        </div>
        <div className="space-y-2 py-2">
            <h5 className="text-stone-400">Precipitation</h5>
            <div className="flex flex-col gap-2">
                <div className="text-stone-300 text-lg py-1 px-3 bg-[var(--clr--stone--100)]/40 rounded-lg flex items-center justify-between">
                    <p>Milimeters(mm)</p>
                    <img src="./icon-checkmark.svg" alt="checkmark" />
                </div>
                <p className="text-stone-300 text-lg py-1 px-3  rounded-lg">Inches(in)</p>
            </div>
        </div>
    </div>;
}