import React from 'react'
import {useState} from 'react'

function CreateEntry() {

    // const [trip, setTrip] = useState({
    //   date: "",
    //   name: "",
    //   content: "",
    //   images: [],
    // });

const [trip, setTrip] = useState({
  date: "",
  name: "",
  content: "",
  images: [],
});

function handleChange(event) {
  const { name, value } = event.target;

  setTrip((prevValue) => {
    return {
      ...prevValue,
      [name]: value,
    };
  });
}



  return (
    <div className="create-entry-form">
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

          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEntry
