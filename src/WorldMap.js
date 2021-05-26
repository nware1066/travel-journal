import { VectorMap } from "react-jvectormap";

function WorldMap(props) {


    // function handleClick(e) {
    //     console.log('hello')
    // }
  function handleClick(e, countryCode) {
      props.getCountryName(e, countryCode)
  }

    return(
            <VectorMap
         map={"world_mill"}
         backgroundColor="#3b96ce"
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