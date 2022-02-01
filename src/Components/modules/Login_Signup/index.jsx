import React, { useRef } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './LoginSignup.scss'
import UseOnOutsideClick from '../../Hooks/UseOnOutsideClick';


const LoginSignup = ({ onClose }) => {
    console.log("singup on close",onClose)
    const modalRef = useRef(null);
    console.log("wasu",modalRef)
    UseOnOutsideClick(modalRef, () => {
        onClose();
        // console.log("outsideclick");
    });
    return (
        <div className='Container_Login'>
            <div ref={modalRef} className='loginsignup'>
                <div className='LoginSignup_Main'>
                    <div className='LoginSignup_Heading'>
                        <h3 className='LoginSignup_Heading_Text'>Welcome To Ecommerce</h3>
                        <small className='LoginSignup_Heading_Paragraph'>Log in with email &amp; password</small>
                    </div>
                    <div>
                        <p className='Email_Phone'>Email or Phone Number</p>
                        <input className='Input_Text' type="text" placeholder='example@mail.com' />
                        <p className='Password'>Password</p>
                        <input className='Input_Password' type="password" placeholder='*******' />
                    </div>
                    <button className='Login_Btn'>Login</button>
                    <div className='On_Main'>
                        <div className='On_hr'>
                            <hr className='Hr'></hr>
                        </div>
                        <div className='On_Heading'>
                            <p className='On_Text'>On</p>
                        </div>
                    </div>
                    <div className="Facebook_Div">
                        <FaFacebookF className='account-icon' />
                        <div className="Text">Continue with Facebook</div>
                    </div>
                    <div className="Google_Div">
                        <FcGoogle className='account-icon' />
                        <div className="Text">Continue with Google</div>
                    </div>
                    <div className='Signup_Main'>
                        <p className='Signup_Text'>Don't have account?</p>
                        <button className="Btn">Sign Up</button>
                    </div>
                    <div className='Forget'>
                        <div className='Forget_Main'>
                            <p className='Forget_Text'>Forget Your Password</p>
                            <button className="Btn">Reset It</button>
                            {/* <p onClick={onClose}></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
