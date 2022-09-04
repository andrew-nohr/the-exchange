import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
    }

    const register = e => {
        e.preventDefault()
    }

  return (
    <div className='login'>

        <Link to='/'>
        <img classname='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

     <div className='login-container'>
        <h1> Sign-In </h1>

        <form>
            <h5> E-mail </h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5> Password </h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button 
            type='submit'
            onClick={signIn} 
            className='login-sign'> Sign-In </button>

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
