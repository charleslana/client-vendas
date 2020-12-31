import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './app/views/home';
import UserRegistration from "./app/views/user-registration";
import PageLinks from "./app/components/PageLinks";
import Login from "./app/views/login";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path={PageLinks.HomePage} exact />
            <Route component={Login} path={PageLinks.LoginPage} exact/>
            <Route component={UserRegistration} path={PageLinks.UserRegistrationPage} exact/>
        </BrowserRouter>
    );
}

export default Routes;