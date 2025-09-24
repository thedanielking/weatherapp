import { useState } from "react"
import SearchDropdown from "./SearchDropdown"

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="mt-7 flex flex-col md:items-center md:justify-center gap-7 md:gap-25 md:w-fit md:mx-auto">
            <h1 className="font-bold text-stone-50 text-center text-5xl md:text-6xl">How's the sky looking today?</h1>
            <div className="relative flex flex-col gap-2.5 md:flex-row md:w-full md:px-10 md:gap-4">
                <div className="flex items-center gap-3 bg-stone-600/50 py-3 px-4 rounded-xl focus:ring-2 focus:ring-stone-200 md:flex-4">
                    <img src="./icon-search.svg" alt="search" className="w-5" />
                    <input type="search" placeholder="Search for a place..." className="text-lg text-stone-300 outline-0 cursor-pointer w-full" 
                    onKeyDown={()=>setShowDropdown((show)=> !show)} />

                    {showDropdown && <SearchDropdown />}
                </div>
                <button className="text-lg bg-[var(--clr--secondary--100)] text-stone-100 py-3 px-4 rounded-xl focus:outline-0 focus:ring focus:ring-[var(--clr--secondary--100)] focus:ring-offset-2 focus:ring-offset-blue-950 cursor-pointer hover:bg-[var(--clr--secondary--200)] md:flex-1">Search</button>
            </div>
        </header>
    )
}

export default Header
