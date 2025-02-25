import React from 'react';
import '../styles/Sign.module.css';

function Login() {
    return (
        <div className='signUp'>
            <div className="sign">
                <div className="getStart">
                    <h1 className='welcome'>Welcome back!</h1>
                    <p className='enter'>Enter your Credentials to access your account</p>
                    <div className="part-2">
                        <label className='lab' htmlFor="email">Email address</label>
                        <input className='place' placeholder='Enter your email' type="text" id="email" />
                    </div>
                    <div className="part-3">
                        <div className="lab">
                            <label className='lab' htmlFor="password">Password</label>
                            <a href="#">Forgot password</a>
                        </div>
                        <input className='place' placeholder='Enter your password' type="password" id="password" />
                    </div>
                    <div className="part-4">
                        <input type="checkbox" />
                        <p>Remember for 30 days</p>
                    </div>
                    <button className='btnSign'>Login</button>

                    <div className="part-5">
                        <div className="hr-1"><hr /></div>
                        <div className="or"><p>or</p></div>
                        <div className="hr-1"><hr /></div>
                    </div>
                    <div className="part-6">
                        <button className='btn'>
                            <img style={{ width: '24px', height: '24px' }} src="/w.png" alt="Google" />
                            <p>Sign in with Google</p>
                        </button>
                        <button className='btn'>
                            <img style={{ width: '24px', height: '24px' }} src="/apple.png" alt="Apple" />
                            <p>Sign in with Apple</p>
                        </button>
                    </div>
                    <div className="part-7">
                        <p>Don't have an account? <a href="/login">Sign Up</a></p>
                    </div>
                </div>
            </div>
            <div className="sign-picture">
                <img src="/barg.png" alt="Background" />
            </div>
        </div>
    );
}

export default Login;
