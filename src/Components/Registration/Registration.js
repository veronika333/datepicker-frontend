import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegistrationFailed from "../Modals/RegistrationFailed";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Registration = () => {
  let history = useHistory();
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  //RegistrationFailed modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const changeHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  // send registration from front to back
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8010/register/send", newUser)
      //axios.post('http://localhost:3001/registration', newUser)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        history.push("/event");
      })
      .catch((err) => {
        console.log(err);
        setShow(true);
      });
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Form
            style={{
              width: "20rem",
              background: "white",
              margin: "20px",
              padding: "20px",
              borderRadius: "5px",
            }}
            onSubmit={submitHandler}
          >
            <h3>Registration Form</h3>
            <Form.Group controlId="firstname">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                placeholder="First name"
                onChange={changeHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={changeHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="User name"
                onChange={changeHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="datepicker@email.com"
                onChange={changeHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
                required
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Submit
            </Button>
            <Form.Text className="text-muted">
              By signing up you accept Datepicker's Terms of service and Privacy
              policy
            </Form.Text>
          </Form>
        </Row>
      </Container>
      <RegistrationFailed show={show} handleClose={handleClose} />
    </div>
  );
};

export default Registration;
