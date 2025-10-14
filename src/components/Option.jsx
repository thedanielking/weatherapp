import { useState } from "react";

export function Option({ val1, val2 }) {
    const [selected, setSelected] = useState(val1);

    return (
        <div className="flex flex-col gap-2">
            {[val1, val2].map((val) => (
                <div
                    key={val}
                    onClick={() => setSelected(val)}
                    className={`text-stone-300 text-lg py-1 px-3 rounded-lg flex items-center justify-between cursor-pointer transition
            ${selected === val ? "bg-[var(--clr--stone--100)]/40" : ""}`}
                >
                    <p>{val}</p>
                    {selected === val && (
                        <img src="./icon-checkmark.svg" alt="checkmark" />
                    )}
                </div>
            ))}
        </div>
    );
}
