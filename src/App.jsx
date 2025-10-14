import { useState } from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import WeatherInfo from "./components/WeatherInfo";
import { CitySearch } from "./hook/useCitySearch";
import useWeatherForecast from "./hook/useWeatherForecast";

function App(){

  const [retryCount, setRetryCount] = useState(0);
  const {location, error: cityError, loading: cityLoading, searchCity} = CitySearch();
  
  const {weather, loading: weatherLoading, error: weatherError} = useWeatherForecast(location?.lat, location?.lng, retryCount);

  const handleRetry = ()=> setRetryCount((count)=> count + 1);

  // if(cityLoading) return <p className="text-2xl text-blue-500">loading cities </p>

  return (
    <div className="bg-[var(--clr--secondary--300)] px-4 py-3 md:space-y-20 md:h-screen md:px-15 md:py-7">
      <NavBar />

      { cityError ? <Error onRetry={handleRetry} /> 
      : (
        <>
        <Header searchCity={searchCity} loading={cityLoading} />

        {weatherLoading 
        ? <p className="text-2xl text-blue-500">Loading weather</p> 
        : weatherError 
        ? <p className="text-2xl text-blue-500">{weatherError}</p>
        : location && <WeatherInfo location={location} weather={weather} />}
      </>
    )
      }
    </div>
  )
}


export default App;