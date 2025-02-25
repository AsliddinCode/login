import React from 'react';
import styles from '../styles/Sign.module.css';

function Sign() {
    return (
        <div className={styles['signUp']}>
            <div className={styles['sign']}>
                <div className={styles['getStart']}>
                    <h1 className={styles['get']}>Get Started Now</h1>
                    <div className={styles['part-1']}>
                        <label className={styles['lab']} htmlFor="name">Name</label>
                        <input className={styles['place']} id="name" placeholder='Enter your name' type="text" />
                    </div>
                    <div className={styles['part-2']}>
                        <label className={styles['lab']} htmlFor="email">Email address</label>
                        <input className={styles['place']} id="email" placeholder='Enter your email' type="text" />
                    </div>
                    <div className={styles['part-3']}>
                        <label className={styles['lab']} htmlFor="password">Password</label>
                        <input className={styles['place']} id="password" placeholder='Enter your password' type="password" />
                    </div>
                    <div className={styles['part-4']}>
                        <input type="checkbox" />
                        <p>I agree to the <a className={styles['term']} href="#">terms & policy</a></p>
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
                        <p>Have an account? <a href="/register">Sign In</a></p>
                    </div>
                </div>
            </div>
            <div className={styles['sign-picture']}>
                <img src="/barg.png" alt="Background" />
            </div>
        </div>
    );
}

export default Sign;
