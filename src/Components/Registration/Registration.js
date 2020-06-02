import React, { useState } from 'react';
import axios from 'axios';
const Registration = () => {

    const [newUser, setNewUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    })

    const changeHandler = (e) => {
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    // send registration from front to back
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8010/register/send', newUser)
            //axios.post('http://localhost:3001/registration', newUser)
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
            })
    
            .catch(err => {
                console.log(err);
            })
    };

    
    return (
        <div>
            <form onSubmit={submitHandler}> 
            <label htmlFor="firstname">Firstname</label>
                    <input type="text" id="firstname" name="firstname" onChange={changeHandler}></input>
               
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname" onChange={changeHandler}></input>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={changeHandler}></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={changeHandler}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={changeHandler}></input>
                   
                <button type="submit" value="Register">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
