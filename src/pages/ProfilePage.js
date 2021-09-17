import React, { useEffect, useState } from "react";
import ProfileComponent from "../components/Auth/ProfileComponent";
import authService from "../_services/auth.service";
import axios from "axios";

const ProfilePage = (props) => {
  const [Data, setData] = useState("");
  const baseUrl = "https://payoman.com/api/merchant";
  // const userProfileData =  async () =>{
  //    const user = authService.getCurrentUser()
  //     const token = user.token
  //     axios.get(`${baseUrl}/completeProfile`,{ headers: {"Authorization" : `Bearer ${token}`} })
  //     .then(res => {
  //     console.log("res",res)
  //       setData(res.data)
  //       const userEmailId = res.data.email;
  //       setEmail(userEmailId)
  //       console.log("email id ", Email)
  //       const userName = await res.data.name
  //       setname(userName)
  //     })
  //     .catch(err => {
  //     console.error(err);
  //     })
  // }
  const getData = async () => {
    const user = authService.getCurrentUser();
    const token = user.token;
    const res = await fetch(`${baseUrl}/completeProfile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log("data,", data.name);
    setData(data);
    console.log(Data);
  };

  useEffect(() => {
    getData();
  }, []);

  //profile page
  return (
    <div>
      <ProfileComponent profileData={Data} name={Data.name} dext="hello" />
    </div>
  );
};

export default ProfilePage;
