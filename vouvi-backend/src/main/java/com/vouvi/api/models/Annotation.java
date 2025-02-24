package com.vouvi.api.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "tb_annotation")
public class Annotation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_annotation")
    private int id;

    @Column(name = "title_annotation")
    private String title;

    @Column(name = "text_annotation")
    private String text;

}
