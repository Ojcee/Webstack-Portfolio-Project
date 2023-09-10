import React from "react";
import "./AuthLayout.css";
import IMG from '../../../assets/img/signupbackground.png'
const AuthLayout = ({ children }) => {
  const AUTHLEFTSTYLES = {
    background: `url(${IMG})`,
    width: "50%",
    height: "100%",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  };


  return (
    <div className={"auth-layout-container"}>
      <div style={AUTHLEFTSTYLES}></div>
      <div className={"auth-layout-right"}>{children}</div>
    </div>
  );
};

export default AuthLayout;
