import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './views/home';
import UserRegistration, {UserRegistrationPage} from "./views/user-registration";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={UserRegistration} path={UserRegistrationPage}/>
        </BrowserRouter>
    );
}

export default Routes;