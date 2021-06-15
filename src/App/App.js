import { getName } from "country-list"
import { useState } from 'react';
import './App.css';
import Trip from "../Components/Trip";
import Trips from "../Components/Trips";
import Login from "../Components/Login"
import { Route } from 'react-router-dom';
import JournalEntry from "../Components/JournalEntry"
import WorldMap from '../Components/WorldMap'

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
    // passed to CreateEntry so that user input can create journal entries
 
  return (
    <div className="App">
        <Route exact path='/login'>
          <Login />
        </Route>
      <div className="main-container">
        <Route exact path='/'>
          <div className="map-container">
            <WorldMap
              getCountryName={getCountryName}
            />
          </div>
          <div className="card-container">
            <h1 className="card-container-heading">click to view or edit</h1>
            {countryNames.map((country, index) => {
              return(<Trip
                name={country}
                id={index}
                key={index}
                countryNames={countryNames}
              />)
            })}
          </div>
          </Route>
        </div>
        <Route exact path="/createEntry">
            <JournalEntry 
              addTrip={addTrip}
              countryNames={countryNames}
            />
        </Route>
    </div>
  );
}

export default App;
