function SearchButton({loading}) {
    return (
        <button className="text-lg bg-[var(--clr--secondary--100)] text-stone-100 py-3 px-4 rounded-xl focus:outline-0 focus:ring focus:ring-[var(--clr--secondary--100)] focus:ring-offset-2 focus:ring-offset-blue-950 cursor-pointer hover:bg-[var(--clr--secondary--200)] md:flex-1 disabled:bg-[var(--clr--secondary--100)]/30 disabled:text-stone-400" disabled={loading}>
            Search
        </button>
    )
}

export default SearchButton
