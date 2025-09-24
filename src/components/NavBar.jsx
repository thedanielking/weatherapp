import { useState } from "react"
import NavDropdown from "./NavDropdown";

function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="relative flex justify-between items-center">
            <img src="./logo.svg" alt="logo" className="w-25 md:w-50" />
            <div className="rounded-lg bg-[var(--clr--neutral--300)]/40 cursor-pointer flex gap-1 items-center p-1 md:px-3 md:py-2 md:gap-2">
                <img src="./icon-units.svg" alt="units" className="w-3 md:w-5" />
                <div className="flex items-center gap-2" 
                onClick={()=> setShowDropdown((show)=> !show)}>
                    <p className="text-xs text-stone-50 md:text-lg">Units</p>
                    <img src="./icon-dropdown.svg" alt="dropdown" />
                </div>

            </div>

            {showDropdown && <NavDropdown />}  
        </nav>
    )
}

export default NavBar


