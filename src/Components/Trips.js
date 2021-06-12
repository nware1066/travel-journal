// import React from 'react'
import Trip from './Trip';

function Trips(props) {

 
      return ( 
          <div>      
        {props.countryNames.map((country, index) => {
            return ( 
                <Trip name = {country}
              id={index}
              key={index}
              countryNames = {props.countryNames}
             />)
            })
        }
    </div>
    )
}

  export default Trips