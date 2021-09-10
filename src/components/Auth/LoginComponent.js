import React from 'react'

import { useState , useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 

const LoginComponent = () => {

    const emailInputRef = useRef('')
    const passwordInputRef = useRef('')


    async function submitHandler(event){
        event.preventDefault();
     
       const enteredEmail = emailInputRef.current.value;
       const entredPassword = passwordInputRef.current.value ;
     
       //optional  add validtion
     
     
        
      }

    return (
        <div>
                <main>
      <div className="banner" >
      <div className="container">
          <div className="row">
              <div className="col-md-12 flex justify-center mt-3">
                   <img src="images/logo.svg" alt="" />
              </div>
          </div>
      </div>
   </div> 
   <ToastContainer />
   <div className="container forn-container " > 
       <form  className="form-sec p-3 mt-3" onSubmit={submitHandler}>
           <h4 className="text-center mb-4">SIGN IN</h4>
           <div className="form-group">
               <input type="email" className="form-control input-box" id="email" placeholder="Email" ref={emailInputRef} />
          </div>
          <div className="form-group">
               <input type="password" className="form-control input-box" id="pwd" placeholder="Password" ref={passwordInputRef} />
          </div> 
          <div className="form-group">
              <input type="submit" className="form-control success-btn"  value="Sign in" placeholder="Sing in" />
          </div>
          <p className="text-center mb-4 mt-5  forgot-sec"><a href="forgotpassword.html">Forgot Password ?</a></p>
          <div className="signup-btn text-center">
              <button className="btn btn-link"><a href="/signup">Sign Up</a></button>
          </div>
       </form>
   </div>
      </main>
        </div>
    )
}

export default LoginComponent
