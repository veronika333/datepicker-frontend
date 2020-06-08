import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginFailed from '../Modals/LoginFailed';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Login = () => {
    let history = useHistory();
    const [loginUser, setLoginUser] = useState({
        username: "",
        password: "",
    });

    //Loginfailed modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const changeHandler = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })
    }

    // send registration from front to back
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(loginUser)
        axios.post('http://localhost:8010/login/send', loginUser)
            .then((response) => {

                if (!response.data.error) {
                    console.log('Front: successful signup');

                } else {
                    console.log('username already taken');
                }
                // Redirect
                history.push('/event');
            })
            .catch(error => {
                console.log('Front: signup error: ')
                console.log(error);
                // loginfailed modal 
                setShow(true);
            })

    }


    return (
        <div>
            <Container>
                <Row className="justify-content-md-center" >
                    <Form style={{ width: '20rem', background: 'white', margin: '20px', padding: '20px', borderRadius: '5px' }} onSubmit={submitHandler}>
                        <h3>
                            Login
                </h3>
                        <Form.Group controlId="username">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" name="username" onChange={changeHandler} placeholder="User name" required />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={changeHandler} placeholder="Password" required />
                        </Form.Group>
                        <Button variant="success" type="submit" >Submit</Button>
                    </Form>
                </Row>
            </Container >
            <LoginFailed show={show} handleClose={handleClose} />
        </div>
    );
}

export default Login;
