package com.example.demo.Dto;

public class RegistrationProfileDto {

    private String username;

    private String weightgoal;

    private int height;

    private int weight;

    private int age;

    private float activity;

    public RegistrationProfileDto(){
        super();
    }

    public RegistrationProfileDto(String username, String weightgoal, int height, int weight, int age, float activity) {
        this.username = username;
        this.weightgoal = weightgoal;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.activity = activity;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
}
