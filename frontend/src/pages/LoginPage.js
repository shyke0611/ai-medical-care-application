import React from "react";
import { useSnackbar } from "notistack";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  const { enqueueSnackbar } = useSnackbar();

  async function handleLogin(data) {
    const response = await login(data.email, data.password);
    if (response.success) {
      enqueueSnackbar("Successfully logged in!", { variant: "success" });
    } else {
      enqueueSnackbar(response.message, { variant: "error" });
    }
  }

  return (
    <AuthForm
      title="Login"
      fields={[
        { name: "email", label: "Email Address", type: "email", autoComplete: "email", autoFocus: true },
        { name: "password", label: "Password", type: "password", autoComplete: "current-password" },
      ]}
      buttonText="Login"
      onSubmit={handleLogin}
      linkMessage="Don't have an account?"
      linkText="Sign Up"
      linkTo="/signup"
      enabled={true}
    />
  );
}
