import React, { useState, useRef } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log("data =>", data.email);
    const userEmail = data.email;

    axios
      .post("https://payoman.com/api/merchant/forgetPassword", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        toast.warn(err.error);
        console.error(err);
      });
  };

  return (
    <div>
      <div class="nav">
        <div class="container mt-2 mb-2">
          <div class="row">
            <div class="col-md-12 nav-link text-white">
                <Link to="/">
                  <i className="fa fa-arrow-left mr-3"></i>
                </Link>
              Forgot Password
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div class="container signup-container">
        <div class="row">
          <div class="col-md-12">
            <form onSubmit={handleSubmit(submitHandler)} class="mt-3">
              <div class="form-group">
                <input
                  type="email"
                  {...register("email")}
                  class="form-control input-box"
                  placeholder="Email"
                />
              </div>
              <div class="form-group mt-5">
                <input
                  type="submit"
                  class="form-control success-btn"
                  value="Send"
                  placeholder="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
