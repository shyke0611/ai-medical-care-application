package com.example.ai_doctor.mapper;

import com.example.ai_doctor.dto.UserRegistrationDto;
import com.example.ai_doctor.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User toEntity(UserRegistrationDto dto) {
        User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword()); // Password hashing can be done elsewhere
        return user;
    }

    public UserRegistrationDto toDto(User user) {
        UserRegistrationDto dto = new UserRegistrationDto();
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setPassword(null); // Do not expose hashed password
        return dto;
    }
}
