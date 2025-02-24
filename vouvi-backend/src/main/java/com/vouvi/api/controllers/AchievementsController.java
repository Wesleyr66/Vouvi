package com.vouvi.api.controllers;

import com.vouvi.api.models.Achievement;
import com.vouvi.api.services.AchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/achievement")
public class AchievementsController {

    @Autowired
    private AchievementService achievementsService;

    @GetMapping
    public List<Achievement> getAllAchievements() {
        return achievementsService.getAllAchievements();
    }

}
