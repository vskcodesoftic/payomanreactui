import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProfileComponent = (props) => {
  const baseUrl = "https://payoman.com";

  const { register, handleSubmit } = useForm({})

//   const userEmailIdentity = props.userEmailId;

//   const userProfileData = props.profileData;

//   let bankName = userProfileData.bankName;
//   let businessName = userProfileData.businessName;
//   let countryCode = userProfileData.countryCode;
//   let useremail = userProfileData.email;
//   let usermessage = userProfileData.message;
//   let userfullname = userProfileData.name;
//   let phoneNumber = userProfileData.phoneNumber;
//   let profilePic = userProfileData.profilePic;
//   let useraccountNumber = userProfileData.accountNumber;
//   let userswiftCode = userProfileData.swiftCode;

//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       accountNumber: `${useraccountNumber}`,
//       bankName: `${bankName}`,
//       businessName: `${businessName}`,
//       countryCode: `${countryCode}`,
//       name: `${userfullname}`,
//       swiftCode: `${userswiftCode}`,
//       phoneNumber: `${phoneNumber}`,
//     },
//   });
  const fileInput = useRef("");

  async function submitHandler(data) {
    console.log(
      "onSubmitFn:",
      data,
      "  imageFile: ",
      fileInput.current.files[0].name
    );
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }

    fd.append(
      "image",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

    // fd.append("email", userEmailIdentity);

    axios
      .post("https://payoman.com/api/merchant/profile", fd)
      .then((res) => {
        console.log(res.data);
        toast.success(`profile details added sucessfully !`);
        // setSpinner(false);
        // setredirect(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            "profile details updation Failed"
        );
      });
  }

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
                Profile
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
                  <div
                    className="preview-img text-center  "
                    data-holder-rendered="true"
                  >
                    <img
                    //   src={`${baseUrl}/${userProfileData.profilePic}`}
                      alt=""
                      className="rounded-circle z-depth-2 img-fluid "
                      width="200"
                      height="300"
                    />
                  </div>
                  <div className="form form-group mt-3">
                    <input
                      required
                      multiple
                      ref={fileInput}
                      type="file"
                      className="form-control"
                      placeholder="Please choose Image"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" clas="">
                      {" "}
                      Name{" "}
                    </label>
                    <input
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                      // placeholder={profileData.name}

                      className="form-control input-box"
                      id="fname"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" clas="">
                      {" "}
                      Business Name{" "}
                    </label>
                    <input
                      type="text"
                      {...register("businessName", {
                        required: true,
                      })}
                      className="form-control input-box"
                      id="businessname"
                      placeholder=""
                    />
                  </div>

                  <div className="form-group">
                    <label for="" clas="">
                      {" "}
                      Account Number{" "}
                    </label>
                    <input
                      type="text"
                      {...register("accountNumber", {
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
                      Bank Name{" "}
                    </label>
                    <input
                      type="text"
                      {...register("bankName", {
                        required: true,
                      })}
                      className="form-control input-box"
                      id="businessname"
                      placeholder=""
                    />
                  </div>

                  <div className="form-group">
                    <label for="" clas="">
                      {" "}
                      swift Code{" "}
                    </label>
                    <input
                      type="text"
                      {...register("swiftCode", {
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
                      Phone Number{" "}
                    </label>
                    <input
                      type="text"
                      {...register("phoneNumber", {
                        required: true,
                      })}
                      className="form-control 
                          input-box"
                      id="phone"
                      placeholder=""
                    />
                  </div>

                  <input
                    type="submit"
                    className="submit-btn form-control success-btn"
                    value="update profile"
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

export default ProfileComponent
