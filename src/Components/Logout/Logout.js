import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";

const Logout = () => {
    let history = useHistory();

    const logoutHandler = (e) => {
        e.preventDefault();
        console.log(e);
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div>
            <Form onSubmit={logoutHandler} >
                <Row className="justify-content-end" style={{ margin: '10px' }}>
                    <Button variant="outline-dark" type="submit" style={{ fontSize: '0.8rem', margin: '10px', color: 'black' }} >
                        Logout
                </Button>
                </Row>
            </Form>

        </div>
    );
}

export default Logout;
