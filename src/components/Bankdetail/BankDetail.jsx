import React from 'react'

import axios from 'axios';
import { useForm } from 'react-hook-form';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const BankDetailComponent = (props) => {
 
//   const userEmailIdentity = props.userEmailId ; 

//   const userProfileData = props.profileData;

//   let bankName = userProfileData.bankName || '';
//   let useraccountNumber = userProfileData.accountNumber || '';
//  let userswiftCode = userProfileData.swiftCode ||  '';


//   const {register, handleSubmit} = useForm({defaultValues:
//     { 
//       accountNumber : `${useraccountNumber}`,
//        bankName  :`${bankName}`,
//        swiftCode :`${userswiftCode}`,
 

//    }});


//   async function submitHandler(data){

//     //  const newdata = { accountNumber : data.accountNumber ,bankName:data.bankName, swiftCode : data.swiftCode, email : userEmailIdentity }
//     const newdata ={...data ,email: userEmailIdentity }
//     console.log(newdata)
//   axios
//       .post('https://payoman.com/api/merchant/bankDetails', newdata)
//       .then((res) => {
//           console.log(res.data);
//           toast.success(`bank details added sucessfully !`);
//           // setSpinner(false);
//           // setredirect(true);
//       })
//       .catch((error) => {
//           console.log(error);
//           toast.error(
//             (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//                 'bank details updation Failed'
//         );
//       });
  
      
     
//    }
  
   const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
 
    }

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
   

    return (
        <div>


    <div className="navbar-sec p-1">
        <div className="container mt-2 mb-2">
            <div className="row">
                <div className="col-md-12 nav-link-new font-weight-bold">
                <a href="Sidebar"><i className="fa fa-arrow-left mr-3"></i></a>
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
                   
                   <form >     
                       <div className="form-group">
                           <label for="" clas=""> Bank Name </label>
                          <input type="text"
                           className="form-control input-box"
                            id="bname" 
                            placeholder=""
                        //     {...register('bankName', {
                        //       required: true
                        //   })} 
                           />
                       </div>
                       <div className="form-group">
                        <label for="" clas=""> Swift Code </label>
                            <input type="text"

                             className="form-control input-box"
                              id="swiftCode"
                               placeholder="" 
                            //    {...register('swiftCode',{
                            //      required :true
                            //    })}
                              />
                       </div> 
                       <div className="form-group">
                        <label for="" clas=""> Account Number </label>
                          <input type="number"  
                        //    {...register('accountNumber', {
                        //       required: true
                        //   })} 
                          className="form-control input-box" id="phone"  />
                       </div> 
                       <div className="form-group">
                   <button  className="form-control success-btn"  > Submit </button>
               </div>
                  </form>
               </div>
           </div>
        </div>
    </div>
   </div>
        

    )
}


  

export default BankDetailComponent;