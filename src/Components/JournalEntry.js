import { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateEntry from './CreateEntry'


function JournalEntry(props) {
  const [showForm, setShowForm] = useState(false);

  const [trip, setTrip] = useState({
    date: "",
    name: "",
    content: "",
    images: [],
  });

  function handleFormChange(event) {
    const { name, value } = event.target;

    setTrip((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="create-entry-wrapper">
      <button onClick={() => setShowForm(!showForm)}>edit journal</button>
      {showForm ? <CreateEntry 
        handleFormChange={handleFormChange}
        trip={trip}
      /> : null}

      <div className="journal-entry">
        <div className="journal-text">
          <h1>{trip.name}</h1>
          <p>Test for GitHub</p>
          <p>{trip.content}</p>
        </div>
        <div className="gallery">
          <img
            className="image img-1"
            src="/Assets/Bury.jpg"
            alt="abby at Bury"
          />
          <img
            className="image img-2"
            src="/Assets/Warwick-garden.jpg"
            alt="peacock in the garden at Warwick Castle"
          />
          <img
            className="image img-3"
            src="/Assets/Warwick.jpeg"
            alt="Warwick castle"
          />
        </div>
      </div>
      <Link to="/">
        <button> Return to Map</button>
      </Link>
    </div>
  );
}

export default JournalEntry;