import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {

    const [newUser, setNewUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    // send registration from front to back
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8010/register/send', newUser)
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
                <input type="text" id="firstname" name="firstname" onChange={changeHandler}></input>
                <input type="text" id="lastname" name="lastname" onChange={changeHandler}></input>
                <input type="text" id="username" name="username" onChange={changeHandler}></input>
                <input type="text" id="email" name="email" onChange={changeHandler}></input>
                <input type="text" id="password" name="passwrod" onChange={changeHandler}></input>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    );
}

export default Registration;
