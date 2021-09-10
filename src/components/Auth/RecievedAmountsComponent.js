import React from 'react'

const RecievedAmountsComponent = () => {
    return (
        <div>
            
    <div className="navbar-sec p-1 ">
        <div className="container mt-2 mb-2">
            <div className="row">
                <div className="col-md-12 nav-link-new font-weight-bold">
                <a href="Sidebar"><i className="fa fa-arrow-left mr-3"></i></a>
                    Received Amount
                </div>
            </div>
        </div>
    </div>  

    <div className="container">
        <div className="row text-center mt-5" >
            <div className="col-md-12 mb-4">
               <button className="received-money-button pt-1 pb-1 pr-3 pl-3">Receivd Transection</button>
           </div>
       </div>
        <div className="row  pt-3 pb-3 mt-3" >
           <div className="col-sm-12">
              <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
              <p className="text-right"> $312</p>    
           </div>
           <div className="col-sm-12">
             <p className="float-left">ABC Company</p>
          </div>
          <div className="col-sm-12">
             <p className="float-left">03-09-2021 | 11:10 AM</p>
             <p className="text-right" >+91 8579213649</p>    
          </div>
        </div>
   
        <div className="row row pt-3 pb-3 mt-3" >
           <div className="col-sm-12">
             <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
             <p className="text-right" >$312</p>    
           </div>
           <div className="col-sm-12">
             <p className="float-left">ABC Company</p>
          </div>
          <div className="col-sm-12">
            <p className="float-left">03-09-2021 | 11:10 AM</p>
            <p className="text-right" >+91 8579213649</p>    
          </div>
         </div>
   
         <div className="row row pt-3 pb-3 mt-3" >
           <div className="col-sm-12">
             <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
             <p className="text-right"> $312</p>    
           </div>
           <div className="col-sm-12">
             <p className="float-left">ABC Company</p>
          </div>
          <div className="col-sm-12">
            <p className="float-left">03-09-2021 | 11:10 AM</p>
            <p className="text-right" >+91 8579213649</p>    
          </div>
         </div>
         <div className="row row pt-3 pb-3 mt-3" >
           <div className="col-sm-12">
             <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
             <p className="text-right" >$312</p>    
           </div>
           <div className="col-sm-12">
             <p className="float-left">ABC Company</p>
          </div>
          <div className="col-sm-12">
            <p className="float-left">03-09-2021 | 11:10 AM</p>
            <p className="text-right" >+91 8579213649</p>    
          </div>
         </div>
      </div>
  
        </div>
    )
}

export default RecievedAmountsComponent
