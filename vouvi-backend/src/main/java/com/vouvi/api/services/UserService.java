package com.vouvi.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vouvi.api.models.User;
import com.vouvi.api.repositories.UserRepository;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public User getUserByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  public User getUserById(int id) {
    return userRepository.findById(id).orElseThrow();
  }

  public User createNewUser(User newUser) {
    userRepository.save(newUser);
    return newUser;
  }

  public User getUserByEmail(String email){ return userRepository.findByEmail(email);}
}
