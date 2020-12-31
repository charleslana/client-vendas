import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './app/views/home';
import UserRegistration from "./app/views/user-registration";
import PageLinks from "./environments/PageLinks";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path={PageLinks.HomePage} exact />
            <Route component={UserRegistration} path={PageLinks.UserRegistrationPage} exact/>
        </BrowserRouter>
    );
}

export default Routes;