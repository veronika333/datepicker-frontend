import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ title, description, date, link }) => {
  return (
    <div className="eventCard">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
      <Link to={link} className="linky">
        Read More
      </Link>
      <button onClick={remove}>Remove Event</button>
    </div>
  );
};

export default EventCard;
