import Form from "./Form"
import Heading from "./Heading"

function Header({searchCity, loading}) {

    return (
        <header className="mt-7 flex flex-col md:items-center md:justify-center gap-7 md:gap-25 md:w-fit md:mx-auto">
            <Heading>
                How's the sky looking today?
            </Heading> 
            <Form searchCity={searchCity} loading={loading} />
        </header>
    )
}

export default Header
