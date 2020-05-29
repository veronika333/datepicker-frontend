import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

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
        axios.post('http://localhost:8010/login/send', loginUser)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div>
            <form>
                <input type="text" id="username" name="username" onChange={changeHandler}></input>
                <input type="password" id="password" name="passwrod" onChange={changeHandler}></input>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
