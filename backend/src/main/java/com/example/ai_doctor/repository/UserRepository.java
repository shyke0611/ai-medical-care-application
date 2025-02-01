package com.example.ai_doctor.repository;

import com.example.ai_doctor.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email); 
    boolean existsByEmail(String email);
}
