import React from 'react';
import '../styles/Sign.css';

function Sign() {
    return (
        <div className='signUp'>
            <div className="sign">
                <div className="getStart">
                    <h1 className='get'>Get Started Now</h1>
                    <div className="part-1">
                        <label className='lab' htmlFor="name">Name</label>
                        <input className='place' id="name" placeholder='Enter your name' type="text" />
                    </div>
                    <div className="part-2">
                        <label className='lab' htmlFor="email">Email address</label>
                        <input className='place' id="email" placeholder='Enter your email' type="text" />
                    </div>
                    <div className="part-3">
                        <label className='lab' htmlFor="password">Password</label>
                        <input className='place' id="password" placeholder='Enter your password' type="password" />
                    </div>
                    <div className="part-4">
                        <input type="checkbox" />
                        <p>I agree to the <a className='term' href="#">terms & policy</a></p>
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
                        <p>Have an account? <a href="/register">Sign In</a></p>
                    </div>
                </div>
            </div>
            <div className="sign-picture">
                <img src="/barg.png" alt="Background" />
            </div>
        </div>
    );
}

export default Sign;
