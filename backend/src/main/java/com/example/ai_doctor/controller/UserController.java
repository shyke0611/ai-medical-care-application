package com.example.ai_doctor.controller;

import com.example.ai_doctor.dto.UserRegistrationDto;
import com.example.ai_doctor.service.UserService;
import com.example.ai_doctor.util.ApiResponseBuilder;

import jakarta.validation.Valid;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final MessageSource messageSource;

    @Autowired
    public UserController(UserService userService, MessageSource messageSource) {
      this.userService = userService;
      this.messageSource = messageSource;
  }

  @PostMapping("/register")
  public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegistrationDto userDto) {
      if (userService.isEmailRegistered(userDto.getEmail())) {
          String message = messageSource.getMessage("Unique.user.email", null, Locale.getDefault());
          return ApiResponseBuilder.buildFieldError(HttpStatus.CONFLICT, "email", message);
      }
  
      userService.registerUser(userDto);
      String successMessage = messageSource.getMessage("Success.user.registered", null, Locale.getDefault());
      return ApiResponseBuilder.build(HttpStatus.CREATED, successMessage);
  }
  
}
