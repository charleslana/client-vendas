import React from "react";
import Bar from '../../components/bar';
import SignUp from "../../components/form/user-registration";

export const UserRegistrationPage = '/user-registration';

const UserRegistration: React.FC = () => {
    return (
        <>
            <Bar/>
            <SignUp/>
        </>
    );
}

export default UserRegistration;