package com.example.ai_doctor.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class UserController {
    @GetMapping("/api/users")
    public List<Map<String, String>> getUsers() {
      return List.of(
        Map.of("id", "1", "name","John Doe", "email", "john.doe@example.com"),
        Map.of("id", "2", "name","Jane Smith", "email", "jane.smith@example.com")
      );
    }
    }
    
    

