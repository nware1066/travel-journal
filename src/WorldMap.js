import { VectorMap } from "react-jvectormap";
import { getName} from "country-list"

function WorldMap() {

    const handleClick = (e, countryCode) => {
        console.log(getName(countryCode))
    }

    return(
        <div className="map-container">
            <VectorMap
         map={"world_mill"}
         containerStyle={{height: "100vh"}}
         onRegionClick={handleClick}
       />
        </div>
    )
}

export default WorldMap;