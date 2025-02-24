package com.vouvi.api.models;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
@Embeddable
public class UserAchievementId {

    private int userId;
    private int achievementId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserAchievementId that = (UserAchievementId) o;
        return userId == that.userId && achievementId == that.achievementId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, achievementId);
    }

}
