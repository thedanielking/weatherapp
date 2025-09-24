function Widget({widget}) {
    const {name, value} = widget
    return (
        <div className="bg-[var(--clr--neutral--700)] p-3 rounded-lg space-y-4">
            <p className="text-lg text-[var(--clr--neutral--200)]">{name}</p>
            <p className="text-stone-300 text-xl md:text-3xl">{value}</p>
        </div>
    )
}

export default Widget

