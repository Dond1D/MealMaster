package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name="profile")
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "profile_id")
    public Integer id;

    private String weightgoal;

    private int height;

    private int weight;

    private int age;

    private float activity;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWeightgoal() {
        return weightgoal;
    }

    public void setWeightgoal(String weightgoal) {
        this.weightgoal = weightgoal;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public float getActivity() {
        return activity;
    }

    public void setActivity(float activity) {
        this.activity = activity;
    }

    public UserProfile(){
        super();
    }



    public UserProfile(Integer id, String weightgoal, int height, int weight, int age, float activity) {
        super();
               this.id = id;
        this.weightgoal = weightgoal;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.activity = activity;
    }
}
