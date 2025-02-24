package com.vouvi.api.services;

import com.vouvi.api.models.Achievement;
import com.vouvi.api.models.User;
import com.vouvi.api.models.UserAchievement;
import com.vouvi.api.models.UserAchievementId;
import com.vouvi.api.repositories.AchievementRepository;
import com.vouvi.api.repositories.UserAchievementRepository;
import com.vouvi.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAchievementService {
    @Autowired
    private UserAchievementRepository userAchievementRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AchievementRepository achievementRepository;


    public List<UserAchievement> getAchievementsByUserId(int userId) {
        return userAchievementRepository.findByUserId(userId);
    }

    // Método para adicionar uma conquista a um usuário
    public UserAchievement addAchievementToUser(int userId, int achievementId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Achievement achievement = achievementRepository.findById(achievementId).orElseThrow(() -> new RuntimeException("Achievement not found"));

        // Cria o relacionamento UserAchievement
        UserAchievement userAchievement = new UserAchievement();
        userAchievement.setUser(user);
        userAchievement.setAchievement(achievement);

        // Salva a associação no banco de dados
        return userAchievementRepository.save(userAchievement);
    }
    
}
