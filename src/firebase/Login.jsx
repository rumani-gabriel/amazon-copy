import React, { useState } from 'react';
import '../App.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import sh from '../img/sh.gif';

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function Login() {
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const signIn = e => {
            e.preventDefault();
    
            auth
                .signInWithEmailAndPassword(email, password)
                .then(auth => {
                    history.push('/')
                })
                .catch(error => alert(error.message))
        }
    
        const register = e => {
            e.preventDefault();
    
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    // it successfully created a new user with email and password
                    if (auth) {
                        history.push('/')
                    }
                })
                .catch(error => alert(error.message))
        }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={sh} 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                Al iniciar sesión, acepta las condiciones de uso y canje de Second Hand. Por favor
                    consulte nuestro Aviso de privacidad, nuestro Aviso de cookies y nuestro Aviso de anuncios basados ​​en intereses.
                </p>

                <button className='login__registerButton'>Create your Second Hand Account</button>
                
            </div>
        </div>
    )
}}

export default Login;