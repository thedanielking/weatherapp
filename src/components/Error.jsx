import Button from "./Button"
import Heading from "./Heading"

function Error({onRetry}) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-6">
            <img src="./icon-error.svg" alt="error" width={40} />
            <Heading>
                Something went wrong
            </Heading>
            <p className="text-[var(--clr--neutral--300)] text-2xl text-center">We couldn't connect to the server(API error). Please try again in a few moments.</p>
            <button className="text-stone-300 text-lg px-5 py-2 rounded-lg text-left bg-[var(--clr--stone--100)] cursor-pointer capitalize flex gap-2 items-center" onClick={onRetry} >
                <img src="./icon-retry.svg" alt="error" />
                <span>Retry</span>
            </button> 

        </div>
    )
}

export default Error
