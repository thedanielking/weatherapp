import { useState } from "react";
import SearchDropdown from "./SearchDropdown";
import SearchButton from "./SearchButton";
import { CitySearch } from "../hook/useCitySearch";

function Form({searchCity, loading}) {
        const [query, setQuery] = useState("")
        const [showDropdown, setShowDropdown] = useState(false);

        const {cities, getCities} = CitySearch();

        const handleSearch = (e)=> {
            e.preventDefault();
            if(!query) return;
            searchCity(query)
            setQuery("")
        }

        const handleChange = (e)=>{
            setQuery(e.target.value);
            setShowDropdown(e.target.value.length > 0)
            getCities(e.target.value)
        }

        
    return (
        <form className="relative flex flex-col gap-2.5 md:flex-row md:w-full md:px-10 md:gap-4" 
            onSubmit={(e)=> handleSearch(e)}>
            <div className="flex items-center gap-3 bg-stone-600/50 py-3 px-4 rounded-xl focus:ring-2 focus:ring-stone-200 md:flex-4">
                <img src="./icon-search.svg" alt="search" className="w-5" />
                <input type="search" placeholder="Search for a place..." value={query}  className="text-lg text-stone-300 outline-0 cursor-pointer w-full" 
                    onFocus={() => query && setShowDropdown(true)}
                    onChange={handleChange}
                    onBlur={() => setShowDropdown(false)} />

                {showDropdown && <SearchDropdown loading={loading} cities={cities} setQuery={setQuery} />}
            </div>
            <SearchButton loading={loading} />
            </form>
    )
}

export default Form
