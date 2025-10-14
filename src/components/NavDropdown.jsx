import { useState } from "react";
import { Option } from "./Option";

export default function NavDropdown() {
    const [isImperial, setIsImperial] = useState(false)


    return <div className="absolute right-0 top-7  rounded-xl bg-[var(--clr--neutral--700)] space-y-1 p-2 w-[200px] z-5 md:top-15 md:w-[250px]">
        <button className={`text-stone-300 text-lg py-1 px-3  rounded-lg w-full text-left cursor-pointer ${isImperial && "bg-[var(--clr--stone--100)]/40"}`} 
        onClick={()=> setIsImperial((set)=> !set)}>
            Switch to Imperial
        </button>
        <div className="space-y-2 py-2 border-b border-b-stone-500/40">
            <h5 className="text-stone-400">Temperature</h5>
            <Option val1="Celsius('C)" val2="Fahrenheit('F)"  />
        </div>
        <div className="space-y-2 py-2 border-b border-b-stone-500/40">
            <h5 className="text-stone-400">Wind Speed</h5>
            <Option val1="kmh" val2="mph"  />
        </div>
        <div className="space-y-2 py-2">
            <h5 className="text-stone-400">Precipitation</h5>
            <Option val1="Milimeters(mm)" val2="Inches(in)"  />
        </div>
    </div>;
}



