function Dropdown() {
    return <div className="absolute right-0 top-10  rounded-xl bg-[var(--clr--neutral--700)] p-2 w-[200px] z-10 md:top-15 md:w-[250px] space-y-1">
        <button className="text-stone-300 text-lg p-2  bg-[var(--clr--neutral--300)]/10  rounded-lg w-full text-left cursor-pointer">Monday</button>
        <button className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">Tuesday</button>
        <button className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">Wednesday</button>
        <button className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">Thursday</button>
        <button className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">Friday</button>
        <button className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">Saturday</button>
        <button className="text-stone-300 text-lg p-2   rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 cursor-pointer">Sunday</button>
        
    </div>;
}

export default Dropdown

