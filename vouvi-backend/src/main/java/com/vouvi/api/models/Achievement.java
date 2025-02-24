package com.vouvi.api.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "tb_achievement")
public class Achievement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_achievement")
    private int idAchievement;

    @Column(name = "name_achievement", nullable = false)
    private String nameAchievement;

    @Column(name = "describe_achievement", nullable = false)
    private String describeAchievement;

    @JsonIgnore
    @OneToMany(mappedBy = "achievement", cascade = CascadeType.ALL)
    private List<UserAchievement> userAchievements;
}
