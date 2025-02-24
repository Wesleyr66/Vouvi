package com.vouvi.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "tb_user_achievement")
public class UserAchievement {

    @EmbeddedId
    private UserAchievementId id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "id_user")
    private User user;

    @ManyToOne
    @MapsId("achievementId")
    @JoinColumn(name = "id_achievement")
    private Achievement achievement;


}
