import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
//import postinfo from "./postinfo";
import Post from "../Post/Post";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './Events.css';

const Events = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:8010/event")
    .then((response) => {
      const posts = response.data;
      setPost(posts);
console.log(posts);
  });
}, []);

const removeHandler = (_id) => {
  console.log(_id);
  axios.delete('http://localhost:8010/event/' + _id)
  .then(() => {
    return axios.get("http://localhost:8010/event");
  })
  .then(response => {
    setPost(response.data);
  });
  };

  const PostList = post.map((p) => {
  
    return (
      <div className="wrapper" key={p._id}>
         <Card>
<Card.Body>
<Card.Title>{p.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">The event will take place {p.date}</Card.Subtitle>
<Card.Text>
 {p.description}
</Card.Text>
<Button variant="outline-info"><Link className="links" to={`${match.url}/${p._id}`}>Read more</Link></Button>
<Button variant="outline-info" onClick={() => removeHandler(p._id)}>Delete</Button>
</Card.Body>
</Card>

    </div>
    )
  });
  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <Route path={match.path}>
          <div className="postsBox">
            <br/>
            <h1>LATEST POSTS</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Events;