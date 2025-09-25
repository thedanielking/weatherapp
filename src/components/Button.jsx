function Button({setDay, day, setShowDropdown}) {

    const handleClick = ()=> {
        setDay(day)
        setShowDropdown(false);
    }
    return (
        <button className="text-stone-300 text-lg p-2  rounded-lg w-full text-left hover:bg-[var(--clr--neutral--300)]/5 focus:bg-[var(--clr--neutral--300)]/10 cursor-pointer capitalize" onClick={()=> handleClick(day)} >
            {day}
        </button>
    )
}

export default Button
