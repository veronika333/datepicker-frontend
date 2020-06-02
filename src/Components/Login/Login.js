import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const Login = () => {
    let history = useHistory();
    const [loginUser, setLoginUser] = useState({
        username: '',
        password: ''
    })

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
                    console.log('username already taken')
                }
                // Redirect
                history.push('/');
            })
            .catch(error => {
                console.log('Front: signup error: ')
                console.log(error)
            })

    }


    return (
        <div>
            <form onSubmit={submitHandler} >
                <label htmlFor="username">
                    <input type="text" id="username" name="username" onChange={changeHandler}></input>
                </label>
                <label htmlFor="password">
                    <input type="password" id="password" name="password" onChange={changeHandler}></input>
                </label>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default Login;
