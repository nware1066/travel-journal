import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


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
        <div className="form-wrapper">
            <form>
                <div className="input">
                    <input 
                        type="date" 
                        name="date"
                        placeholder="Date"
                        value={trip.date}
                        onChange={handleChange}
                    />
                </div>   
                <div className="input">
                    <input 
                        type="text"
                        name="name"
                        placeholder="headline"
                        value={trip.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                        <textarea
                            type="textarea"
                            name="content"
                            placeholder="your notes"
                            value={trip.content}
                            onChange={handleChange}
                        />
                </div>
                <div className="input">
                <input 
                    type="file"
                    name="image"
                    placeholder="upload your pictures here"
                    value={trip.pictures}
                    onChange={handleChange}  
                />
                </div>
                <div className="input">
                  <Link to='/'><button>Submit</button></Link>
                </div>
            </form>    
        </div>
        <div className="journal-entry">
            <h1>England</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo vitae ipsa vel minima debitis voluptatum labore molestias asperiores beatae inventore!<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cupiditate neque quod commodi repudiandae velit repellat ea aut distinctio, harum quasi pariatur fugiat inventore officia debitis nihil aperiam, incidunt aspernatur!<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae sit deserunt? Fugiat quisquam non distinctio nesciunt eum, atque culpa est eveniet error odit dicta! Libero, et minus exercitationem veritatis voluptas necessitatibus vero fugit nisi!</p>
            <div className="image-container">
                <img className="image img-1" src="/Assets/Bury.jpg" alt="abby at Bury" />
                <img className="image img-2" src="/Assets/Warwick-garden.jpg" alt="peacock in the garden at Warwick Castle" />
                <img className="image img-3" src="/Assets/Warwick.jpeg" alt="Warwick castle" />   
            </div>
        </div>
    </div>
)


}

export default CreateEntry;