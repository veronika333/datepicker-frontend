import React, { useEffect, useState } from "react";
import { useRouteMatch, Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';

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
        <Jumbotron style={{ background: 'white' }}>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto">Tomcat</strong>
          </Toast.Header>
          <Toast.Body>
            <Card.Title>{loadedPost.title}</Card.Title>
            {/* <Card.Subtitle>{loadedPost.username}</Card.Subtitle> */}
            <Card.Subtitle className="mb-2 text-muted">
              The event will take place {loadedPost.date}
            </Card.Subtitle>
            <Card.Text>{loadedPost.description}</Card.Text>
            <Button variant="outline-secondary">
              <Link to="/event" className="d-inline p-2 text-black" style={{ color: 'black' }}>
                Go Back
            </Link>
            </Button>
          </Toast.Body>
        </Jumbotron>
      </div>
    );
    window.scrollTo(0, 0);
  }
  return postData;
};

export default Event;
