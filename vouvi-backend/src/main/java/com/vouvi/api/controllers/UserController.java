package com.vouvi.api.controllers;

import com.vouvi.api.models.User;
import com.vouvi.api.repositories.UserRepository;
import com.vouvi.api.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public User searchByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("/id")
    public User getById(@RequestParam int id) {
        return userService.getUserById(id);
    }

    // Criar um novo usuário
    @PostMapping("/register")
    public User registerUser(@RequestBody User newUser) {
        return userService.createNewUser(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        // Verificar se o email e a senha estão presentes
        if (email == null || password == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email ou senha ausente");
        }

        // Buscar o usuário pelo email
        User user = userService.getUserByEmail(email);

        // Verificar se o usuário foi encontrado
        if (user == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário não encontrado");
        }

        // Verificar se a senha está correta
        if (!user.getPassword().equals(password)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Senha incorreta");
        }

        // Retornar os dados do usuário autenticado
        return ResponseEntity.ok(user);  // Você pode retornar um objeto com os dados do usuário ou um token de autenticação
    }

}