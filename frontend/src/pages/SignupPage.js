import React, { useState } from "react";
import { useSnackbar } from "notistack";
import useAPI from "../hooks/use-api";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function SignupPage() {
  const api = useAPI();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  async function handleSignup(data) {
    setFormErrors({});

    const response = await api.registerUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });

    if (response.success) {
      enqueueSnackbar(response.message, { variant: "success" });
      navigate("/login");
    } else {
      if (typeof response.message === "object") {
        setFormErrors(response.message);
      } else if (response.message) {
        enqueueSnackbar(response.message, { variant: "error" });
      } else {
        enqueueSnackbar("An unexpected error occurred. Please try again.", { variant: "error" });
      }
    }
  }

  return (
    <AuthForm
      title="Sign Up"
      fields={[
        { name: "firstName", label: "First Name", autoFocus: true, error: formErrors.firstName },
        { name: "lastName", label: "Last Name", error: formErrors.lastName },
        { name: "email", label: "Email Address", type: "email", autoComplete: "email", error: formErrors.email },
        { name: "password", label: "Password", type: "password", autoComplete: "new-password", error: formErrors.password },
      ]}
      buttonText="Sign Up"
      onSubmit={handleSignup}
      linkMessage="Already have an account?"
      linkText="Login"
      linkTo="/login"
      enabled={true}
    />
  );
}
