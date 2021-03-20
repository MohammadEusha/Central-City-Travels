import React, { useContext, useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import { initializeLoginFramework, handleGoogleSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginForm';


const Login = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }



    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();


    }

    return (
        <div >
            <Navbar></Navbar>
            <div className='d-flex justify-content-center'>
                <div className="main-content container">
                    <div id="booking-area" className="booking-form">
                        <h1>Central City Travels</h1>
                        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                        <label htmlFor="newUser">Click on CheckBox To Create An Account</label>
                        <form onSubmit={handleSubmit}>
                            {newUser && <h4>Name</h4>}
                            {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                            <br />
                            <label for=""><h4>Email</h4></label>
                            <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                            <br />
                            <label for=""><h4>Password</h4></label>
                            <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                            <br />
                            <input className="btn btn-secondary text-dark" type="submit" value='Sign In' />
                        </form>
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}


                        <button style={{ width: '400px' }} className="btn btn-secondary" onClick={googleSignIn}>Sign In With Google</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;

