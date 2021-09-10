import React from 'react'
import {

    Switch,
    Route,
 
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
  

const Routes = () => {
    return (
        <div>
            
              <Switch>
              {/* <Route exact path='/' component={HomePage} /> */}
              <Route exact path='/' component={AuthPage} />
              <Route exact path='/dashboard' component={DashboardPage} />
              <Route exact path='/profile' component={ProfilePage} />
              <Route exact path = '/receivedAmounts' component={RecievedAmountsPage}  />
              <Route exact path = '/sidebar' component={Sidebar}  />
               <Route exact path ='/signup' component={SignupComponent} />
               <Route exact path ='/changePassword' component={ChangePasswordComponent} />
               <Route exact path ='/privacyPolicy' component={PrivacyPolicy} />
               <Route exact path ='/support' component={SupportPage} />


            </Switch>
        </div>
    )
}



export default Routes
