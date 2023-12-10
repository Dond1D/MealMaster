package com.example.demo.model;

import jakarta.persistence.*;

@Table(name = "shopping")
@Entity
public class Shopping {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "shopping_id")
    private int id;

    private String name;

    private double price;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")

    private ImageEntity image;
    public ImageEntity getImage() {
        return image;
    }

    public void setImage(ImageEntity image) {
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


}
