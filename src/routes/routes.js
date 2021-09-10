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
import SignupComponent from '../components/Auth/SignupComponent';
import ChangePasswordComponent from '../components/Auth/ChangePasswordComponent';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SupportPage from '../pages/SupportPage';
import AuthService from '../_services/auth.service';
import { PrivateRoute } from '../components/PrivateRoutes/PrivateRoute';
import NotFound from '../pages/NotFound';
  


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
              {CurrentUser ? (
                  <>
              <Route exact path='/dashboard' component={DashboardPage} />
              <Route exact path='/profile' component={ProfilePage} />
              <Route exact path = '/receivedAmounts' component={RecievedAmountsPage}  />
              <Route exact path = '/sidebar' component={Sidebar}  />
               <Route exact path ='/signup' component={SignupComponent} />
               <Route exact path ='/changePassword' component={ChangePasswordComponent} />
               <Route exact path ='/privacyPolicy' component={PrivacyPolicy} />
               <Route exact path ='/support' component={SupportPage} />
               <Route exact path='/' >
                   <Redirect to="/dashboard" />
               </Route>
             </> ) : ( <>

               <Route exact path="/" component={AuthPage} />
            </>  )}
         
        
            </Switch>
        </div>
    )
}



export default Routes
