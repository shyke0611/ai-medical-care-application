import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import homepageAnimation from "../assets/animations/homepage_animation.json"; // Import animation
import "../assets/styles/authform.css";

export default function AuthForm({
  title,
  fields,
  buttonText,
  onSubmit,
  linkText,
  linkTo,
  linkMessage,
  enabled,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    fields.forEach((field) => {
      data[field.name] = formData.get(field.name);
    });
    onSubmit(data);
  };

  return (
    <Container maxWidth="lg">
      {/* Background Animation */}
      <Lottie 
        animationData={homepageAnimation} 
        className="auth-background-animation" 
        loop
      />

      <div className="auth-wrapper">
        <Box className="auth-container">
          <Box className="auth-box">
            <Typography component="h1" variant="h5" className="auth-title">
              {title}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate className="auth-form">
              {fields.map((field) => (
                <TextField
                  key={field.name}
                  required
                  fullWidth
                  id={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type || "text"}
                  autoComplete={field.autoComplete}
                  autoFocus={field.autoFocus}
                  error={!!field.error}
                  helperText={field.error}
                />
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!enabled}
                className="auth-button"
              >
                {buttonText}
              </Button>
              <Typography variant="body2" className="auth-link">
                {linkMessage} <Link to={linkTo}>{linkText}</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
}
