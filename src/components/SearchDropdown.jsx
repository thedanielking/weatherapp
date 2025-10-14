

function SearchDropdown({loading, cities, setQuery}) {
     return <div className="absolute  top-10  rounded-xl bg-[var(--clr--neutral--700)] p-2 w-[250px] z-10 md:top-15 md:w-[550px] space-y-1">
        {loading ? (
            <div className="text-stone-300 text-lg p-2  rounded-lg w-full text-left cursor-pointer flex gap-2">
                <img src="./icon-loading.svg" alt="search" />
                <p>Search in progess</p>
                </div>
        ) 
        : (
            <>
            {cities.map((city, i)=> {
                const {name, country} = city
                return <div className="text-stone-300 text-lg p-2  hover:bg-[var(--clr--neutral--300)]/10  rounded-lg w-full text-left cursor-pointer" key={i}
                onMouseDown={()=>setQuery(name)}
                >
                    {name}, {country}
                </div>
            })}
            </>
    )
        }
    </div>;
}

export default SearchDropdown
