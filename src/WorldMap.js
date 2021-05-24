import { VectorMap } from "react-jvectormap";
import {getName} from "country-list"

function WorldMap() {

    return(
        <div className="map-container">
            <VectorMap
         map={"world_mill"}
         containerStyle={{height: "100vh"}}
       />
        </div>
    )
}

export default WorldMap;