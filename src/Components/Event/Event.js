import React, { useEffect, useState } from "react";
import { useRouteMatch, Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Event = () => {
  const [loadedPost, setLoadedPost] = useState();
  let { eventId } = useParams();
  //let eventId = window.location.pathname;

  useEffect(() => {
    //use fetch only when i dont have data yet
    if (!loadedPost) {
      axios.get("http://localhost:8010/event/" + eventId).then((response) => {
        console.log(response.data);
        setLoadedPost(response.data);
      });
    }
  });
  let postData = undefined;
  if (eventId) {
    postData = <h1>Loading post</h1>;
  }
  if (loadedPost) {
    postData = (
      <div>
        <Card>
          <Card.Title>{loadedPost.title}</Card.Title>
          {/* <Card.Subtitle>{loadedPost.username}</Card.Subtitle> */}
          <Card.Subtitle className="mb-2 text-muted">
            The event will take place {loadedPost.date}
          </Card.Subtitle>
          <Card.Text>{loadedPost.description}</Card.Text>
          <Button variant="success">
            <Link to="/event" className="links">
              Go Back
            </Link>
          </Button>
          <br />
        </Card>
      </div>
    );
  }
  return postData;
};

export default Event;
