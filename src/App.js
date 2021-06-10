import { getName } from "country-list"
import { useState } from 'react';
import './App.css';
import Trip from "./Trip";
// import CreateEntry from "./CreateEntry"
import WorldMap from './WorldMap'

function App() {

    const [countryNames, setCountryNames] = useState([])
    
    function getCountryName (e, countryCode) {
        let newCountry = getName(countryCode)
        
        setCountryNames(countryNames => {

         return [...countryNames, newCountry]
        })
    }
    // getCountryName get the names associated with the countrycodes and creates an array of the names of the selected countries.
    
     const [trips, setTrips] = useState([])
     
     function addTrip(newTrip) {
      setTrips(prevTrips => {
        return [...prevTrips, newTrip]
      })
    }
    // passed to CreateEntry so that user input can create trip cards
 


  return (
    <div className="App">
      <div className="main-container">
      <div className="map-container">
        <WorldMap
        getCountryName={getCountryName}
        
         />
      </div>
      <div className="journal-container">
        {countryNames.map((country, index) => {
          return(<Trip
          name={country}
          // content={trip.content}
          id={index}
          key={index}
          countryNames={countryNames}
          />)
        })}
        {/* <CreateEntry 
          addTrip={addTrip}
        /> */}
      </div>
      </div>
    </div>
  );
}

export default App;
