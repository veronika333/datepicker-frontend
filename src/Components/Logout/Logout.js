import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
                <Button variant="dark" type="submit" >
                    Logout
                </Button>
            </Form>

        </div>
    );
}

export default Logout;
