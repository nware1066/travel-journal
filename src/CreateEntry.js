import { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateEntry(props) {

const [trip, setTrip] = useState({
    date: '',
    name: '',
    content: '',
    images: []
}) 

function handleChange(event) {
    const {name, value} = event.target;

    setTrip(prevValue => {
        return {
            ...prevValue,
            [name]: value
        }
    })
}

function createTrip(event, index) {
    props.addTrip(trip)
        setTrip({
            date: '',
            name: '',
            content: '',
            pictures: [],
            key: {index},
            id: {index}
        })
        event.preventDefault();
}

return (
    <div className="create-entry-wrapper">
        <div>
      
        <form>
            <input type="date" 
                name="date"
                placeholder="Date"
                value={trip.date}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="name"
                placeholder="headline"
                value={trip.name}
                onChange={handleChange}
             />
            <textarea
                type="textarea"
                name="content"
                placeholder="your notes"
                value={trip.content}
                onChange={handleChange}
             />
             <input 
                type="file"
                name="image"
                placeholder="upload your pictures here"
                value={trip.pictures}
                onChange={handleChange}
             
             />
            <Link to='/'><button onClick={createTrip}>Submit</button></Link>
        </form>    
        </div>
        <div className="journal-entry">
            <h1>{trip.name}</h1>
            <p>{trip.content}</p>
        </div>
    </div>
)


}

export default CreateEntry;