import { getName } from "country-list"
import { useState } from 'react';
import './App.css';
import WorldMap from './WorldMap'

function App() {

    const [countryNames, setCountryNames] = useState([])

      function getCountryName (e, countryCode) {
       let newCountry = getName(countryCode)
        console.log(newCountry)
        setCountryNames(countryNames => {
         return [...countryNames, newCountry]
        })
    }
 
 


  return (
    <div className="App">
      <div className="main-container">
      <div className="map-container">
        <WorldMap
        getCountryName={getCountryName}
         />
      </div>
      <div className="journal-container">
        <h1>{countryNames}</h1>
      </div>
      </div>
    </div>
  );
}

export default App;
