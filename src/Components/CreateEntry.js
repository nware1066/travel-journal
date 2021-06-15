import React from 'react'
// import {useState} from 'react'

function CreateEntry(props) {

    //   function createTrip(event, index) {
    //     props.addTrip(trip);
    //     setTrip({
    //       date: "",
    //       name: "",
    //       content: "",
    //       pictures: [],
    //       key: { index },
    //       id: { index },
    //     });
    //     event.preventDefault();
    //   }



  return (
    <div className="create-entry-form">
      <div className="form-wrapper">
        <form>
          <div className="input">
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={props.trip.date}
              onChange={props.handleFormChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="name"
              placeholder="headline"
              value={props.trip.name}
              onChange={props.handleFormChange}
            />
          </div>
          <div className="input">
            <textarea
              type="textarea"
              name="content"
              placeholder="your notes"
              value={props.trip.content}
              onChange={props.handleFormChange}
            />
          </div>
          <div className="input">
            <input
              type="file"
              name="image"
              placeholder="upload your pictures here"
              value={props.trip.pictures}
              onChange={props.handleFormChange}
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
