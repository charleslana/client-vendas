import React from "react";
import Bar from '../../components/bar';
import SignUp from "../../components/form/user-registration";
import Footer from "../../components/footer";

const UserRegistration: React.FC = () => {
    return (
        <>
            <Bar/>
            <SignUp/>
            <Footer/>
        </>
    );
}

export default UserRegistration;