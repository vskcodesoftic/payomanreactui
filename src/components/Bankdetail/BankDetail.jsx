import React, { useState, useEffect } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authService from "../../_services/auth.service";

export const BankDetailComponent = (props) => {
  const baseUrl = "http://localhost:8001";

  //   const userEmailIdentity = props.userEmailId;

  const nameUser = props.name;
  console.log("name prop", nameUser);
  const [Data, setData] = useState("");

  const [users, setUsers] = useState({ email: "", name: "" });

  let nameUserId;
  let userBankName;

  const getData = async () => {
    const user = authService.getCurrentUser();
    const token = user.token;
    const res = await fetch(
      `http://localhost:8001/api/merchant/completeProfile`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();
    console.log("data,found", data);
    setData(data);
    setUsers(data);
  };
  nameUserId = users.name;

  let userEmailIdFOUND = users.email;
  userBankName = users.bankName || 'enter bank name';

  let userAccountNumber = users.accountNumber || 'enter account number';

  let userBusinessName = users.businessName || 'enter business name';

  let userSwiftCode = users.swiftCode || 'enter swift code';

  let userPhoneNumber = users.phoneNumber || 'enter contact number';

  let userProfilePic = users.profilePic;

  console.log("fffffgkggkgk,,", nameUserId);

  useEffect(() => {
    getData();
  }, []);

  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      name: `${nameUserId}`,
      businessName: `${userBusinessName}`,
      accountNumber: `${userAccountNumber}`,
      bankName: `${userBankName}`,
      swiftCode: `${userSwiftCode}`,
      phoneNumber: `${userPhoneNumber}`,
    },
  });

  useEffect(() => {
    reset({
      name: `${nameUserId}`,
      businessName: `${userBusinessName}`,
      accountNumber: `${userAccountNumber}`,
      bankName: `${userBankName}`,
      swiftCode: `${userSwiftCode}`,
      phoneNumber: `${userPhoneNumber}`,
    });
  }, [users]);

  async function submitHandler(data) {
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }

    console.log("fd", data.name);

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
      <div className="navbar-sec p-1">
        <div className="container mt-2 mb-2">
          <div className="row">
            <div className="col-md-12 nav-link-new font-weight-bold">
              <a href="Sidebar">
                <i className="fa fa-arrow-left mr-3"></i>
              </a>
              Bank Details
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                  <label for="" clas="">
                    {" "}
                    Bank Name{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control input-box"
                    id="bname"
                    placeholder=""
                    {...register("bankName", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-group">
                  <label for="" clas="">
                    {" "}
                    Swift Code{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control input-box"
                    id="swiftCode"
                    placeholder=""
                    {...register("swiftCode", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-group">
                  <label for="" clas="">
                    {" "}
                    Account Number{" "}
                  </label>
                  <input
                    type="number"
                    {...register("accountNumber", {
                      required: true,
                    })}
                    className="form-control input-box"
                    id="phone"
                  />
                </div>
                <div className="form-group">
                  <button className="form-control success-btn"> Submit </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetailComponent;
