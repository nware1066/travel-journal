import { VectorMap } from "react-jvectormap";
import {useState} from 'react';

function WorldMap(props) {

    
const [countryCodes, setCountryCodes] = useState([])



  function handleClick(event, countryCode) {
      setTimeout(() => {
          Array.from(document.getElementsByClassName("jvectormap-tip")).forEach((el) => {
              el.style.display = 'none'
          });
      }, 100);
      props.getCountryName(event, countryCode)
      setCountryCodes(countryCodes => {
          return [...countryCodes, countryCode]
        });
  }

    return(
            <VectorMap
         map={"world_mill"}
         backgroundColor="#3b96ce"
         containerStyle={{height: "100vh"}}
         selectedRegions={countryCodes}
        regionStyle={{
            initial: {
                fill: 'aliceblue',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            },
            selected: {
                fill: 'seagreen'
            },
            selectedHover: {
            }
        }}
        onRegionClick={ function (event, countryCode) {
             handleClick(event, countryCode)
             
         }}
         regionsSelectable={true}
       />
    )
}

// (Event e, String code, Boolean isSelected, Array selectedRegions) Will be called when region is (de)selected. isSelected parameter of the callback indicates whether region is selected or not. selectedRegions contains codes of all currently selected regions.

export default WorldMap;