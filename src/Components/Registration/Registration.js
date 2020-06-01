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
            //axios.post('http://localhost:3001/registration', newUser)
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
                <label htmlFor="firstname">
                    <input type="text" id="firstname" name="firstname" onChange={changeHandler}></input>
                </label>
                <label htmlFor="lastname">
                    <input type="text" id="lastname" name="lastname" onChange={changeHandler}></input>
                </label>
                <label htmlFor="username">
                    <input type="text" id="username" name="username" onChange={changeHandler}></input>
                </label>
                <label htmlFor="email">
                    <input type="text" id="email" name="email" onChange={changeHandler}></input>
                </label>
                <label htmlFor="password">
                    <input type="password" id="password" name="passwrod" onChange={changeHandler}></input>
                </label>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    );
}

export default Registration;
