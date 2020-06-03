import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const Home = () => {
    return (
        <>
            <Jumbotron style={{ background: 'white', margin: '50px' }}>
                <Container>
                    <h1>Lorem Lorem Lorem</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>
                        <Button variant="success" href="register">Register now!</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Row className="justify-content-center">
                <Card border="light" style={{ width: '18rem', margin: '50px' }}>
                    <Card.Header style={{ fontWeight: 'bolder' }}>Easy Group Scheduling!</Card.Header>
                    <Card.Body>
                        <Toast>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Tomcat</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>
                                <p>Title: Pool Party</p>
                                <p>Description: Let's have a party at a hotel!</p>
                                <p>Date: 30.06.2020</p>
                            </Toast.Body>
                        </Toast>
                    </Card.Body>
                </Card>
                <br />
                <Card border="light" style={{ width: '18rem', margin: '50px' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Lorem Lorem Lorem</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="light" style={{ width: '18rem', margin: '50px' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Lorem Lorem Lorem</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </Card.Text>
                    </Card.Body>
                </Card>
            </Row >
            <br />
        </>
    );
}

export default Home;
