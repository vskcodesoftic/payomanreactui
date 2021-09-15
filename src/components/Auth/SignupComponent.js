import React, { useRef } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

function SignupComponent() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const fullNameInputRef = useRef("");
  const countrycodeInputRef = useRef("");
  const phoneInputRef = useRef("");
  const businessNameInputRef = useRef("");
  const retypepasswordInputRef = useRef("");

  async function submitHandler(data) {
    const entredPassword = await data.password;

    const entredretypepassword = retypepasswordInputRef.current.value;

    if (entredPassword !== entredretypepassword) {
      toast.warn("Passwords don't match");
      return;
    }

    console.log(data.email);

    axios
      .post("https://payoman.com/api/merchant/signup", data)
      .then((res) => {
        console.log(res.data);
        toast.success(`merchant Added sucessfully !`);
        // setSpinner(false);
        // setredirect(true);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            "signup Failed"
        );
      });
  }

  return (
    <div>
      <main>
        <div className="nav">
          <div className="container mt-2 mb-2">
            <div className="row">
              <div className="col-md-12 nav-link text-white">
                <a href="Sidebar">
                  <i className="fa fa-arrow-left mr-3" />
                </a>
                Sign Up
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

        <div className="container signup-container">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-box"
                    placeholder="Full Name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-box"
                    placeholder="Business name"
                    {...register("businessName", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="omr"
                    id=""
                    className="form-control input-box"
                    {...register("countryCode", {
                      required: true,
                    })}
                  >
                    <option value="968">OMR(+968)</option>
                    <option value="93">AF(+93)</option>
                    <option value="358">AX(+358)</option>
                    <option value="244">AO(+244)</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-box"
                    id="phone"
                    placeholder="Phone"
                    {...register("phoneNumber", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control input-box"
                    id="email"
                    {...register("email", {
                      required: true,
                    })}
                    placeholder="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input-box"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    ref={retypepasswordInputRef}
                    className="form-control input-box"
                    id="cpassword"
                    ref={retypepasswordInputRef}
                    placeholder="Re-type Password"
                    name="cpassword"
                  />
                </div>
                <div className="form-group form-check ">
                  <label className="form-check-label mb-3">
                    <input className="form-check-input" type="checkbox" /> I
                    Agree to the{" "}
                    <a href="">
                      <u>Terms and conditions</u>
                    </a>
                  </label>
                </div>
                <div className="form-group">
                  <button className="form-control success-btn"> Submit </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignupComponent;
