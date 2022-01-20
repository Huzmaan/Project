import React from 'react';
import {FaFacebookF,FaGoogle} from 'react-icons/fa';
import 


const Login_Signup = () => {
    return (
        <div>
            <h3>Welcome To Ecommerce</h3>
            <p>Log in with email &amp; password</p>
            <div>
                <p>Email or Phone Number</p>
                <input type="text" placeholder='example@mail.com'/>
                <p>Password</p>
                <input type="password" placeholder='*******'/>
            </div>
            <button>Login</button>
            <p>Or</p>
            <div>
            <FaFacebookF/>
            <button>Continue with Facebook</button>
            </div>
            <div>
                <FaGoogle/>
                <button>Continue with Google</button>
            </div>
            <div>
                <p>Don't have account?</p>
                <button>Sign Up</button>
            </div>
            <div>
            <p>Forget Your Password</p>
                <button>Reset It</button>
            </div>
        </div>
    )
}

export default Login_Signup;
