import { createContext, useState } from "react";

const context = createContext();

const initialState = {
    name: "Berlin",
    country: "Germany",
    lat: 6.5432,
    lng: 3.3572,
}

function CityProvider({children}){

    const [location, setLocation] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);




    async function searchCity(cityName){
        //guard clause
        if(!cityName) return;

        setLoading(true);
        setError(null);

        try{
            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&format=json&language=en`;


            const res = await fetch(url);
            if(!res.ok) throw new Error("Error in searching city name")

            const data = await res.json();
            //checking for matching city
            if(data.results && data.results.length > 0){
                const {latitude, longitude, name, country} = data.results[0];
                setLocation({lat:latitude, lng:longitude, name, country})
            }    
        } catch(e){
            setError(e.message);
            setLoading(false);
            setLocation(initialState);
        }finally{
            setLoading(false);
        }
    }



    return <CityContext.Provider 
    value={searchCity, location, loading,  error}>
        {children}
    </CityContext.Provider>
}