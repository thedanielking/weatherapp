import Header from "./components/Header";
import NavBar from "./components/NavBar";
import WeatherInfo from "./components/WeatherInfo";

function App(){
  return (
    <div className="bg-[var(--clr--secondary--300)] px-4 py-3 md:space-y-20 md:h-screen md:px-15 md:py-7">
      <NavBar />
      <Header />
      <WeatherInfo />
    </div>
  )
}


export default App;