import React, { useState } from "react";
import axios from "axios";
import "./NewEventPost.css";

const NewEventPost = () => {
  const [newEventPost, setnewEventPost] = useState({
    title: "",
    description: "",
    date: "",
  });

  //Passing the value of the input
  const changeValueHandler = (e) => {
    setnewEventPost({
      ...newEventPost,
      [e.target.name]: e.target.value,
    });
  };

  //Function for button
  const addEventHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8010/event", newEventPost).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <h3 className="middle">Add new event</h3>
      <form onSubmit={addEventHandler} className="newPost">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="desription"
            id="description"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={changeValueHandler}
          />
        </div>

        <button className="btn" type="submit">
          Add Event
        </button>
      </form>
    </>
  );
};

export default NewEventPost;
