import React from "react";
import SignUpForm from "./SignUpForm";
import { registrateUser } from "../api/User";
import "./style.css";

const SignUp = props => {
  const { onSignUp } = props;
  const onSubmit = async ({ username, email, password }) => {
    try {
      console.log(username, email, password)
      const res = await registrateUser({ username, email, password });
      if (res.success) {
        const { username, email } = res;
        onSignUp && onSignUp({ username, email });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <div className="auth-form-container">
        <SignUpForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default SignUp;
