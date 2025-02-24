package com.vouvi.api.services;

import com.vouvi.api.models.Achievement;
import com.vouvi.api.repositories.AchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AchievementService {

    @Autowired
    private AchievementRepository achievementsRepository;

    public List<Achievement> getAllAchievements(){
        return achievementsRepository.findAll();
    };
}
