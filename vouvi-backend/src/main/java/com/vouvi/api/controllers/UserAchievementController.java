package com.vouvi.api.controllers;

import com.vouvi.api.models.UserAchievement;
import com.vouvi.api.repositories.AchievementRepository;
import com.vouvi.api.repositories.UserAchievementRepository;
import com.vouvi.api.repositories.UserRepository;
import com.vouvi.api.services.UserAchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/achieved")
public class UserAchievementController {

    @Autowired
    private UserAchievementService userAchievementService;


    // Endpoint para buscar todas as conquistas de um usuário
    @GetMapping("/{userId}")
    public ResponseEntity<List<UserAchievement>> getAchievementsByUser(@PathVariable int userId) {
        List<UserAchievement> userAchievements = userAchievementService.getAchievementsByUserId(userId);
        return ResponseEntity.ok(userAchievements);
    }

    // Endpoint para adicionar uma conquista a um usuário
    @PostMapping("/add")
    public ResponseEntity<UserAchievement> addAchievementToUser(@RequestParam int userId, @RequestParam int achievementId) {
        UserAchievement userAchievement = userAchievementService.addAchievementToUser(userId, achievementId);
        return ResponseEntity.ok(userAchievement);
    }
}
