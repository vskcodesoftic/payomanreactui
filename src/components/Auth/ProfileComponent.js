import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authService, { authenticationService } from "../../_services/auth.service";




export const ProfileComponent =  (props) => {

  
  const baseUrl = "http://localhost:8001";
 

//   const userEmailIdentity = props.userEmailId;

const nameUser = props.name;
console.log("name prop", nameUser)
const [Data, setData] = useState('')

const [users, setUsers] = useState({ email: "", name: '' });

let nameUserId ;
let userBankName ;

const getData = async () =>{
  const user = authService.getCurrentUser()
      const token = user.token
  const res = await fetch(`http://localhost:8001/api/merchant/completeProfile`,{ headers: {"Authorization" : `Bearer ${token}`} })
    const data = await res.json();
    console.log("data,found", data);
    setData(data)
    setUsers(data)
    
  }
  nameUserId = users.name;

  let userEmailIdFOUND = users.email;
  userBankName = users.bankName;

  let userAccountNumber = users.accountNumber;

  let userBusinessName = users.businessName ;

  let userSwiftCode = users.swiftCode;

  let userPhoneNumber = users.phoneNumber;

   let userProfilePic = users.profilePic;

  console.log("fffffgkggkgk,,",nameUserId)

  useEffect(() => {
     getData()
  },[])



const { register, handleSubmit  ,setValue ,reset} =  useForm({  defaultValues: 
  {
    name : `${nameUserId}`,
    businessName : `${userBusinessName}`,
    accountNumber : `${userAccountNumber}` ,
    bankName : `${userBankName}`,
    swiftCode : `${userSwiftCode}`,
    phoneNumber : `${userPhoneNumber}`
}
});

useEffect(() => {
  reset({  
    name : `${nameUserId}`,
    businessName : `${userBusinessName}`,
    accountNumber : `${userAccountNumber}` ,
    bankName : `${userBankName}`,
    swiftCode : `${userSwiftCode}`,
    phoneNumber : `${userPhoneNumber}`
 });
},[users])



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

 console.log("fd" , data.name)

    fd.append(
      "image",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

  fd.append("email", userEmailIdFOUND);

    axios
      .post("http://localhost:8001/api/merchant/profile", fd)
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
              <form onSubmit={handleSubmit(submitHandler)}  className="mt-3 ">
                  <div
                    className="preview-img text-center  "
                    data-holder-rendered="true"
                  >
                    <img
                    src={`${baseUrl}/${userProfilePic}`}
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

                  <div className="form-group">
              <input type="submit" className="form-control success-btn"  value="Update Profile" />
          </div>
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
