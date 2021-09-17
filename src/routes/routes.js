import React, { useContext, createContext, useEffect, useState } from 'react'
import {

    Switch,
    Route,
    Redirect,
    useLocation,
 
  } from "react-router-dom";
import AuthPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import RecievedAmountsPage from '../pages/RecievedAmount';
import Sidebar from '../pages/Sidebar';
import SignupPage from '../pages/SignupPage';
import ChangePasswordComponent from '../components/Auth/ChangePasswordComponent';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SupportPage from '../pages/SupportPage';
import AuthService from '../_services/auth.service';
import  ProtectedRoute  from '../components/PrivateRoutes/PrivateRoute';
import NotFound from '../pages/NotFound';
import BankDetailComponent from '../components/Bankdetail/BankDetail';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
  


function NoMatch() {
    let location = useLocation();
    return (
      <div>
        <center><h3>
        Page  Not found for <code>{location.pathname}</code>
        </h3></center>
      </div>
    );
}

const Routes = () => {

    
    const [CurrentUser, setCurrentUser] = useState('')
    useEffect(() => {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          setCurrentUser(user);    
        } 
      }, []);
    
     
 

    return (
        <div>
            
              <Switch>
              {/* <Route exact path='/' component={HomePage} /> */}
              <Route exact path="/auth" component={AuthPage} />
              <ProtectedRoute exact path='/' component={DashboardPage} />
              <ProtectedRoute exact path='/profile' component={ProfilePage} />
              <ProtectedRoute exact path = '/receivedAmounts' component={RecievedAmountsPage}  />
              <ProtectedRoute exact path = '/sidebar' component={Sidebar}  />
               <Route exact path ='/signup' component={SignupPage} />
               <ProtectedRoute exact path ='/changePassword' component={ChangePasswordComponent} />
               <ProtectedRoute exact path ='/privacyPolicy' component={PrivacyPolicy} />
               <ProtectedRoute exact path ='/support' component={SupportPage} />
               <ProtectedRoute exact path ='/bankDetail' component={BankDetailComponent} />
            
               <Route exact path="/forgetPassword" component={ForgetPasswordPage} />
         
        
            </Switch>
        </div>
    )
}



export default Routes
