import React from "react";
import Bar from '../../components/bar'
import SignIn from "../../components/form/login";
import Footer from "../../components/footer";

const Login: React.FC = () => {
    return (
        <>
            <Bar/>
            <SignIn/>
            <Footer/>
        </>
    );
}

export default Login;