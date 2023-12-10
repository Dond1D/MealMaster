package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Allergy {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "allergy_id")
    private Long id;
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diet_id")
    @JsonBackReference
    private Diet diet;

    public Diet getDiet(){ return diet;}

    public void setDiet(Diet diet){
        this.diet=diet;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Allergy() {
        super();
    }

    public Allergy(Long id, String name) {
        this.id = id;
        this.name = name;
    }


}
