import { VectorMap } from "react-jvectormap";
import { getName} from "country-list"

function WorldMap(props) {

  const handleClick = (e, countryCode) => {
      console.log(getName(countryCode))
      props.getCountryName(e, countryCode)
  }

    return(
            <VectorMap
         map={"world_mill"}
         containerStyle={{height: "100vh"}}
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
         onRegionClick={handleClick}
         regionsSelectable={true}
       
       />
    )
}

export default WorldMap;