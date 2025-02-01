package com.example.ai_doctor.service;

import com.example.ai_doctor.dto.UserRegistrationDto;
import com.example.ai_doctor.mapper.UserMapper;
import com.example.ai_doctor.model.User;
import com.example.ai_doctor.repository.UserRepository;
import com.example.ai_doctor.util.SecurityUtils;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public boolean isEmailRegistered(String email) {
        return userRepository.existsByEmail(email);
    }

    public void registerUser(UserRegistrationDto userDto) {
        String hashedPassword = SecurityUtils.hashPassword(userDto.getPassword());
        User user = userMapper.toEntity(userDto);
        user.setPassword(hashedPassword);

        userRepository.save(user);
    }
}
