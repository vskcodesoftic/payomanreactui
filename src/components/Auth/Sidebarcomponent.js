import React,{ useState , useEffect } from 'react'
import axios from 'axios';

import Logo from '../images/logo.svg'

import {
  Link
  } from "react-router-dom";
import authService from '../../_services/auth.service';


export default function SideBarComponent() {


    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
     
        }
    
        const openNav = () => {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("main").style.marginLeft = "250px";
          }


          const [data, setdata] = useState([])
          const user = authService.getCurrentUser();
          const token = user.token;
        
          const getData = () => {
            axios.get("http://localhost:8001/api/merchant/getListOfPayments",  {
              headers: { Authorization: `Bearer ${token}` },
            } )
            .then(res => {
              console.log("paymets",res.data.payments)
              const Data = res.data.payments
              setdata(Data)
            })
            .catch(err => {
              console.error(err); 
            })
          }
         

          const [Balance , setBalance ] = useState()
  const getBalance = () => {
    axios.get("http://localhost:8001/api/merchant/remainingBalance", {
      headers: { Authorization: `Bearer ${token}` },
    } )
    .then(res => {
      const Balance = res.data.Balance
       setBalance(Balance)
    })
    .catch(err => {
      console.error(err); 
    })
  }
        
          useEffect(() => {
           getData()
           getBalance()
          }, [])
        


 
  return (
    <div >


      <main>

      <div id="mySidebar" className="sidebar">
    <div className="mb-2">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><i className="fa fa-arrow-left mr-2 ml-2"></i> Dashboard</a>
    </div>
    <div className="row logo-raw code-scaner-container mb-4">
        <div className="col-md-12">
           <div className="col-md-12 text-center logo-column-2 pt-3">
               <img src={Logo} alt="logo" />
           </div>
        </div>
        <div className="col-md-12">
            <div className="col-md-12 text-center logo-column">
                <img src="images/qrcode.png" alt="" className="img-fluid" />
           </div>
        </div>
    </div>
    <div className="links ">
        <div className="container "> 
            <div className="row">
               <div className="col-md-12 mt-4">
                <div className=" " id="collapsibleNavbar">
                    <ul className="navbar-nav">
                      <li className="nav-item mt-3 ">
                        <Link to="/"><a className="nav-link active " ><i className="fas fa-home mr-3"></i> Dashboard <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li>
                      <li className="nav-item mt-3">
                      <Link to="/profile"><a className="nav-link"><i className="fas fa-user mr-3"></i>  Profile <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li>
                      <li className="nav-item mt-3">
                      <Link to="/bankDetail"><a className="nav-link"><i className="fas fa-bank mr-3"></i> Bank Details <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                       
                      <li className="nav-item mt-3">
                      <Link to="/receivedAmounts"><a className="nav-link" ><i className="fas fa-money mr-3"></i> Received Amounts <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                      <li className="nav-item mt-3">
                      <Link to="/ChangePassword"><a className="nav-link" ><i className="fas fa-key mr-3"></i> Change Password <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li>    
                      <li className="nav-item mt-3">
                      <Link to="/privacyPolicy"><a className="nav-link" ><i className="fas fa-lock mr-3"></i> Privacy and Security <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                      <li className="nav-item mt-3">
                      <Link to="/Support"><a className="nav-link" ><i className="fas fa-headphones mr-3"></i> Support <i className="fa fa-chevron-right float-right"></i></a></Link>
                    </li> 
                
                    <li className="nav-item mt-3">
                    <Link to="/"><a className="nav-link" onClick={authService.logout} ><i className="fas fa-user mr-3"></i> Logout  <i className="fa fa-chevron-right float-right"></i></a></Link>
                    </li> 
                    <li className="nav-item mt-3">
                        <hr className="float-left" />
                        <p className="text-center">@Copyright PayOman , Design And Develeope By <span >Codesoftic Tech PVT LTD.</span></p>
                    </li>
                    </ul>
                  </div>
               </div>
            </div>
        </div>
    </div>
</div>



    
                <div id="main">
                    <div className="openbtn" onClick={openNav} >☰ &nbsp;&nbsp;Dashboard</div>  
                    <div className="container">
                       <div className="row">
                          <div className='col-md-12'>
                              <div className="wallet-card text-white mt-3 text-center pb-5">
                                  <p className="pt-3 pb-5 ">Wallet</p>
                                  <h6> {Balance} OMR</h6>
                              </div>
                          </div>
                       </div>
                       <div className="row text-center mt-5" >
                       <div className="col-md-12">
                          <button className="received-money-button pt-1 pb-1 pr-3 pl-3">Received Transection</button>
                      </div>
                  </div>

                </div>
       
                <div className="container">
      {data.map((payment) => { return (<>
          <div>
          <div className="row text-center mt-5" >
              <div className="col-md-12 mb-4">
                 <button className="received-money-button pt-1 pb-1 pr-3 pl-3"> Transactions Made</button>
             </div>
         </div>
          <div className="row  pt-3 pb-3 mt-3" >
             <div className="col-sm-12">
                <p className="float-left"><i className='fa fa-check-circle fa-lg'> Send to </i></p>
                <p className="text-right">  {payment.amount} OMR</p>    
             </div>
             <div className="col-sm-12">
               <p className="float-left">{payment.merchantName} <br />
               {payment.merchantemail} <br />
               {payment.merchantphoneNumber}</p>
             

            </div>
            <div className="col-sm-12">
               <p className="float-left">{payment.time}</p>
               <p className="text-right" >+91 8579213649</p>    
            </div>
          </div>
     </div>
     </>)
      })}
     
      </div>


  </div> 
</main>
    </div>
  )
}
