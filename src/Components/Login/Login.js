import React, {useState} from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../../fireBase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password)
    .then((auth) => {
        navigate('/') 
    })
    .catch(error => alert(error.message))

}

const register = e => {
    e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
    .then((auth) =>{
        // sucessfully created a new user with email and password
        if (auth){
          navigate('/')  
        }
    })
    .catch(error => alert(error.message))
}

  return (
    <div className='login'>

        <Link to='/'>
            <img 
            className="login-Logo"
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            alt='word amazon with an arrow as a smiley face pointing from A to Z in the word amazong.'
            />
        </Link>

     <div className='login-container'>
        <h1> Sign-In </h1>

        <form>
            <h5> E-mail </h5>
            <input 
            type='text' 
            value={email}
            onChange={e => setEmail(e.target.value)}/>

            <h5> Password </h5>
            <input type='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}/>

            <button 
            type='submit'
            onClick={signIn} 
            className='login-signIn'> Sign-In </button>

        </form>

                <p> This is a fake Amazon website. </p>

            <button 
            onClick={register}
            className='login-registerButton'> Create Amazon Account </button>

        </div>
    </div>
  )
}

export default Login
