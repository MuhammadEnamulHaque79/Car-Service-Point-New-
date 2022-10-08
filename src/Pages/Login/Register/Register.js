import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate=useNavigate();

    const navigateToLogin=()=>{
        navigate('/login');
    };
    if(user){
        navigate('/');
    };

    const handleRegister=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Enter your email' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none pe-auto' onClick={navigateToLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;