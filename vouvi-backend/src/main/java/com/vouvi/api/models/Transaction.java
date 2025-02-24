package com.vouvi.api.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "tb_transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaction")
    private int id;

    @Column(name = "title_transaction")
    private String title;

    @Column(name = "value_transaction")
    private float value;

    @Column(name = "type_transaction")
    private String type;

    @Column(name = "date_transaction")
    private Date date;

}
