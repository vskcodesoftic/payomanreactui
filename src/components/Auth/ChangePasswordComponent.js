import React, { useState, useRef } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ChangePasswordComponent = (props) => {
  const { register, handleSubmit } = useForm();


  const fileInput = useRef("");
//   const userEmailIdentity = props.userEmailId;
//   console.log("emailid", userEmailIdentity);
  const RetypePasswordRef = useRef("");

//   async function submitHandler(data) {
//     const newdata = { ...data, email: userEmailIdentity };

//     const entredPassword = await data.newpassword;

//     const entredretypepassword = RetypePasswordRef.current.value;

//     if (entredPassword !== entredretypepassword) {
//       toast.warn("new Password and confirm password don't match");
//       return;
//     }

//     axios
//       .post("https://payoman.com/api/merchant/updatepassword", newdata)
//       .then((res) => {
//         console.log(res.data);
//         toast.success(`password updated sucessfully !`);
//         // setSpinner(false);
//         // setredirect(true);
//         signOut();
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error(
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//             "password updation Failed"
//         );
//       });
//   }

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
  };

    return (
        <div>
                <div>
        <div className="navbar-sec p-1">
          <div className="container mt-2 mb-2">
            <div className="row">
              <div className="col-md-12 nav-link-new font-weight-bold">
                <a href="Sidebar">
                  <i className="fa fa-arrow-left mr-3"></i>
                </a>
                change password
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <div>
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
              <form  className="mt-3 ">
                  <div className="form-group">
                    <label for="" clas="">
                      {" "}
                      Old Password{" "}
                    </label>
                    <input
                      type="password"
                      {...register("oldpassword", {
                        required: true,
                      })}
                      className="form-control input-box"
                      id="fname"
                      placeholder=""
                    />
                  </div>

                  <div className="form-group">
                    <label for="" clas="">
                      {" "}
                      New Password{" "}
                    </label>
                    <input
                      type="password"
                      {...register("newpassword", {
                        required: true,
                      })}
                      className="form-control 
                          input-box"
                      id="phone"
                      placeholder=""
                    />
                  </div>

                  <div className="form-group">
                    <label for="" clas="">
                      {" "}
                      Retype-new Password{" "}
                    </label>
                    <input
                      type="password"
                      ref={RetypePasswordRef}
                      className="form-control 
                          input-box"
                      id="phone"
                      placeholder=""
                    />
                  </div>

                  <input
                    type="submit"
                    className="submit-btn form-control success-btn"
                    value="Save"
                    placeholder="Save"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        </div>
    )
}

export default ChangePasswordComponent
