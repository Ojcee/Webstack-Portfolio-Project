import React from "react";
import AuthLayout from "../Atomic Components/AuthLayout/AuthLayout";
import './Signup.css'
import GoogleImage from '../../assets/img/Google.png'
import TwitterImage from '../../assets/img/twitter.png'


const Signup = () => {
  return (
    <AuthLayout>
      <h1>Sign Up</h1>
      <p>Sign up for free to access to in any of our products </p>
      <div className="social-signup-btn">
        <button>
          <img src={GoogleImage} alt="" />
          Continue With Google
        </button>
        <button>
          <img src={TwitterImage} alt="" />
          Continue With Twitter
        </button>
      </div>

      <div className="signup-form">
        {/* <div>

        </div> */}
        <label htmlFor="email">Email Address</label>
        <input name="email" id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="password" />
        <button className="form-btn">Sign Up</button>
      </div>

      <p>Already have an account? Login</p>
    </AuthLayout>
  );
};

export default Signup;
