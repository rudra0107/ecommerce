import React from "react";
import Signin from "../../components/signin/Signin";
import SignUp from "../../components/sign-up/SignUp";
import "./SigninandSignupPage.scss";

const SigninandSignupPage = () => {
  return (
    <>
      <div className="sign-in-and-sign-up">
        <Signin />
        <SignUp />
      </div>
    </>
  );
};

export default SigninandSignupPage;
