import React, { createContext } from 'react'

import { useState , useRef } from 'react';
import { useHistory  } from 'react-router';

import {
    Link
    } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthService from "../../_services/auth.service";

 

const LoginComponent = (props) => {
const history = useHistory()
    const emailInputRef = useRef('')
    const passwordInputRef = useRef('')


    async function submitHandler(event){
        event.preventDefault();
     
       const enteredEmail = emailInputRef.current.value;
       const entredPassword = passwordInputRef.current.value ;
     
       //optional  add validtion
     
       AuthService.login(enteredEmail, entredPassword).then(
        () => {
        toast.success("logged in sucessfully ")

         history.push("/");
          window.location.reload();
        },
        (error) => {
            toast.warn(`failed login ${error.response.data.message}`)
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

        }
      );
        
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
          <p className="text-center mb-4 mt-5  forgot-sec"><a href="/forgetPassword">Forgot Password ?</a></p>
          
       </form>
       <div className="signup-btn text-center">
              <button className="btn btn-link"><Link to="/signup">Sign Up</Link></button>
          </div>
   </div>
      </main>
        </div>
    )
}

export default LoginComponent
