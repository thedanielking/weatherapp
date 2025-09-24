function SearchDropdown() {
     return <div className="absolute  top-10  rounded-xl bg-[var(--clr--neutral--700)] p-2 w-[250px] z-10 md:top-15 md:w-[550px] space-y-1">
        <div className="text-stone-300 text-lg p-2  bg-[var(--clr--neutral--300)]/10  rounded-lg w-full text-left cursor-pointer">City Name</div>
        <div className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">City Name</div>
        <div className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">City Name</div>
    </div>;
}

export default SearchDropdown
