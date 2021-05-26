import { useState } from 'react';

function CreateArea(props) {

const [trip, setTrip] = useState({
    name: '',
    content: ''
}) 


function handleChange(event) {
    const {name, value} = event.target;

    setTrip(prevValue => {
        return {
            prevValue,
            [name]: value
        }
    })
}

function createTrip(event) {
    props.addTrip(trip)
        setTrip({
            name: '',
            content: ''
        })
        event.preventDefault();
}

return (
    <div className="create-area-wrapper">
        <form>
            <input 
            type="text"
            name="name"
            placeholder="name of country"
            value={trip.name}
            onChange={handleChange}
             />
              <input 
            type="text"
            name="content"
            placeholder="your notes"
            value={trip.content}
            onChange={handleChange}
             />
            <button onClick={createTrip}>Submit</button>
        </form>
    </div>
)


}

export default CreateArea;