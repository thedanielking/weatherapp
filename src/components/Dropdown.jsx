import Button from "./Button";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Dropdown({setDay, setShowDropdown}) {
    return <div className="absolute right-0 top-10  rounded-xl bg-[var(--clr--neutral--700)] p-2 w-[200px] z-10 md:top-15 md:w-[250px] space-y-1">
        {days.map((day, i)=> (
            <Button key={i} day={day} setDay={setDay} setShowDropdown={setShowDropdown} />
        ) )
    }
        
    </div>;

}

export default Dropdown

