package com.vouvi.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "tb_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private int id;

    @Column(name = "email_user")
    private String email;

    @Column(name = "password_user")
    private String password;

    @Column(name = "cep_user")
    private char[] cep = new char[8];

    @Column(name = "birthdate_user")
    private Date birthdate;

    @Column(name = "gender_user")
    private String gender;

    @Column(name = "pronoun_user")
    private String pronoun;

    @Column(name = "username_user")
    private String username;

    @Column(name = "name_user")
    private String name;

    @Column(name = "lastname_user")
    private String lastname;

    @Column(name = "xp_user")
    private int xp;

    @Column(name = "vcoin_user")
    private int vcoin;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserAchievement> userAchievements;

}
