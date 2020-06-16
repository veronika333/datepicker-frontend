import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import imageSrc from '../Assets/photo-of-women-wearing-masks-787961.jpg';
import imageSrc2 from '../Assets/iphone-on-notebook-3361483.jpg';

const Home = () => {
    return (
        <>
            <Jumbotron style={{ background: 'white', margin: '50px' }}>
                <Container>
                    <h1>Create your first event with Datepicker</h1>
                    <p>
                        Datepicker allows you to quickly make your event live and put it into the hands of your event-goers! <br />
                    With our simple interface, you can easily share your get-together information with our entire community by adding your own event, date and description. Plus, you can see how many people are going to participate in your event. </p>
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
                            <Toast.Header closeButton={false} >
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
                    <Card.Header style={{ fontWeight: 'bolder' }}>Get together with friends!</Card.Header>
                    <Card.Body>
                        <Card.Title ><i>"We love this app! Simple and quick! We would definitely recommend it!"</i></Card.Title>
                        <Card.Text>
                            <img title="my-img" src={imageSrc} alt="my-img" style={{ width: '100%', borderRadius: '5px' }} />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="light" style={{ width: '18rem', margin: '50px' }}>
                    <Card.Header style={{ fontWeight: 'bolder' }}>Make a private event public!</Card.Header>
                    <Card.Body>
                        <Card.Title>Create a private event at any time and place. Anyone with a Datepiker account can join.</Card.Title>
                        <Card.Text>
                            <img title="my-img2" src={imageSrc2} alt="my-img2" style={{ width: '100%', borderRadius: '5px' }} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row >
            <br />
        </>
    );
}

export default Home;
