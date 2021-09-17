import React, { useEffect, useState } from "react";
import axios from "axios";
import authService from "../../_services/auth.service";
import { Link } from 'react-router-dom'

const RecievedAmountsComponent = () => {
  const [data, setdata] = useState([]);
  const user = authService.getCurrentUser();
  const token = user.token;

  const getData = () => {
    axios
      .get("https://payoman.com/api/merchant/getListOfPayments", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.payments);
        const Data = res.data.payments;
        setdata(Data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="navbar-sec p-1 ">
        <div className="container mt-2 mb-2">
          <div className="row">
            <div className="col-md-12 nav-link-new font-weight-bold">
                <Link to="/Sidebar">
                  <i className="fa fa-arrow-left mr-3"></i>
                </Link>
              Received Amount
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-md-12 mb-4">
            <button className="received-money-button pt-1 pb-1 pr-3 pl-3">
              {" "}
              Transactions Made
            </button>
          </div>
        </div>
        {data.map((payment) => {
          return (
            <>
              <div>
                <div className="row  pt-3 pb-3 mt-3">
                  <div className="col-sm-12">
                    <p className="float-left">
                      <i className="fa fa-check-circle fa-lg"> Send to </i>
                    </p>
                    <p className="text-right"> ₹ {payment.amount}</p>
                  </div>
                  <div className="col-sm-12">
                    <p className="float-left">
                      {payment.merchantName} <br />
                      {payment.merchantemail} <br />
                      {payment.merchantphoneNumber}
                    </p>
                  </div>
                  <div className="col-sm-12">
                    <p className="float-left">{payment.time}</p>
                    <p className="text-right">+91 8579213649</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RecievedAmountsComponent;
