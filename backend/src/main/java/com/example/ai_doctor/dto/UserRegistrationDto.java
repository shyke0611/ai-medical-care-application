package com.example.ai_doctor.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UserRegistrationDto {

    @NotEmpty(message = "{NotEmpty.user.firstName}")
    private String firstName;

    @NotEmpty(message = "{NotEmpty.user.lastName}")
    private String lastName;

    @NotEmpty(message = "{NotEmpty.user.email}")
    @Email(message = "{Email.user.email}")
    private String email;

    @NotEmpty(message = "{NotEmpty.user.password}")
    @Size(min = 6, message = "{Size.user.password}")
    private String password;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
