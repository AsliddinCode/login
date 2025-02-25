import React from 'react';
import styles from '../styles/Sign.module.css';
import Link from 'next/link';

function Login() {
    return (
        <div className={styles['signUp']}>
            <div className={styles['sign']}>
                <div className={styles['getStart']}>
                    <h1 className={styles['welcome']}>Welcome back!</h1>
                    <p className={styles['enter']}>Enter your Credentials to access your account</p>
                    <div className={styles['part-2']}>
                        <label className={styles['lab']} htmlFor="email">Email address</label>
                        <input className={styles['place']} placeholder='Enter your email' type="text" id="email" />
                    </div>
                    <div className={styles['part-3']}>
                        <div className={styles['lab']}>
                            <label className={styles['lab']} htmlFor="password">Password</label>
                            <Link href="#">Forgot password</Link>
                        </div>
                        <input className={styles['place']} placeholder='Enter your password' type="password" id="password" />
                    </div>
                    <div className={styles['part-4']}>
                        <input type="checkbox" />
                        <p>Remember for 30 days</p>
                    </div>
                    <button className={styles['btnSign']}>Login</button>

                    <div className={styles['part-5']}>
                        <div className={styles['hr-1']}><hr /></div>
                        <div className={styles['or']}><p>or</p></div>
                        <div className={styles['hr-1']}><hr /></div>
                    </div>
                    <div className={styles['part-6']}>
                        <button className={styles['btn']}>
                            <img style={{ width: '24px', height: '24px' }} src="/w.png" alt="Google" />
                            <p>Sign in with Google</p>
                        </button>
                        <button className={styles['btn']}>
                            <img style={{ width: '24px', height: '24px' }} src="/apple.png" alt="Apple" />
                            <p>Sign in with Apple</p>
                        </button>
                    </div>
                    <div className={styles['part-7']}>
                        <p>Don't have an account? <Link href="/login">Sign Up</Link></p>
                    </div>
                </div>
            </div>
            <div className={styles['sign-picture']}>
                <img src="/barg.png" alt="Background" />
            </div>
        </div>
    );
}

export default Login;
