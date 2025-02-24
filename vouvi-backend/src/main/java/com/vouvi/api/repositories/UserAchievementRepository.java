package com.vouvi.api.repositories;

import com.vouvi.api.models.UserAchievement;
import com.vouvi.api.models.UserAchievementId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAchievementRepository extends JpaRepository<UserAchievement, UserAchievementId> {

    List<UserAchievement> findByUserId(int userId);
}
