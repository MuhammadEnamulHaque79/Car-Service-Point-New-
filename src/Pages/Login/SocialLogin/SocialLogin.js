import React from 'react';
import googlelogo from '../../../images/social/googlelogo.png';
import fblogo from '../../../images/social/fblogo.png';
import gitlogo from '../../../images/social/gitlogo.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
   
    if (error || error1) {
    
        errorElement=<p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        
    };

    if (user || user1) {
        navigate('/home');
    };


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-3'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement};
            
            <div>
                <button onClick={() => signInWithGoogle()} style={{ border: '1px solid grey', borderRadius: '15px' }} className='btn btn-primary w-50% d-block mx-auto'>
                    <img style={{ width: '70px me-5' }} src={googlelogo} alt="" />
                    <span>Sign up with Google</span>
                </button>

                <button style={{ border: '1px solid grey', borderRadius: '15px' }} className='btn btn-primary w-50% d-block mx-auto my-2'>
                    <img style={{ width: '70px me-5' }} src={fblogo} alt="" />
                    <span>Sign up with Facebook</span>
                </button>
                <button onClick={()=>signInWithGithub()} style={{ border: '1px solid grey', borderRadius: '15px' }} className='btn btn-primary w-50% d-block mx-auto'>
                    <img style={{ width: '70px me-5' }} src={gitlogo} alt="" />
                    <span>Sign up with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;