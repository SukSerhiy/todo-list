import React from "react";
import SignUpForm from "./SignUpForm";
import { registrateUser } from "../api/User";
import "./style.css";

const SignUp = props => {
  const onSubmit = async ({ username, email, password }) => {
    try {
      const res = await registrateUser({ username, email, password });
      if (res.success) {
        const { history } = props;
        history.push('/');
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
