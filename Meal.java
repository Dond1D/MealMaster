package com.example.demo.model;

import jakarta.persistence.*;

import java.awt.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="meals")
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "meals_id")
    private Integer id;

    private String name;
    private int calories;
    @Column(length = 1000) // Customize the length as needed
    private String description;
    private int protein;
    private int carbohydrates;
    private int fat;
    private int fiber;
    private int sugar;

    private boolean diaryFree;
    private boolean meatFree;
    private boolean fishFree;
    private boolean eggFree;


    private boolean soyFree;
    private boolean glutenFree;
    private boolean groundNutFree;

    private byte[] content;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name="meals_ingredient",
            joinColumns = {@JoinColumn(name="meals_id")},
            inverseJoinColumns = {@JoinColumn(name="ingredient_id")}
    )



    private List<Ingredient> ingredients;

    public List<Ingredient> getIngredients()
    {return ingredients;}

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private ImageEntity image;
    public ImageEntity getImage() {
        return image;
    }

    public void setImage(ImageEntity image) {
        this.image = image;
    }

    public void setIngredients(List<Ingredient> ingredients){
        this.ingredients = ingredients;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getProtein() {
        return protein;
    }

    public void setProtein(int protein) {
        this.protein = protein;
    }

    public int getCarbohydrates() {
        return carbohydrates;
    }

    public void setCarbohydrates(int carbohydrates) {
        this.carbohydrates = carbohydrates;
    }

    public int getFat() {
        return fat;
    }

    public void setFat(int fat) {
        this.fat = fat;
    }

    public int getFiber() {
        return fiber;
    }

    public void setFiber(int fiber) {
        this.fiber = fiber;
    }

    public int getSugar() {
        return sugar;
    }

    public void setSugar(int sugar) {
        this.sugar = sugar;
    }

    public boolean isDiaryFree() {
        return diaryFree;
    }
    public boolean isMeatFree() {
        return meatFree;
    }

    public void setMeetFree(boolean meatFree) {
        this.meatFree = meatFree;
    }


    public void setDiaryFree(boolean dairyFree) {
        this.diaryFree = dairyFree;
    }

    public boolean isFishFree() {
        return fishFree;
    }

    public void setFishFree(boolean fishFree) {
        this.fishFree = fishFree;
    }

    public boolean isEggFree() {
        return eggFree;
    }

    public void setEggFree(boolean eggFree) {
        this.eggFree = eggFree;
    }

    public boolean isSoyFree() {
        return soyFree;
    }

    public void setSoyFree(boolean soyFree) {
        this.soyFree = soyFree;
    }

    public boolean isGlutenFree() {
        return glutenFree;
    }

    public void setGlutenFree(boolean glutenFree) {
        this.glutenFree = glutenFree;
    }

    public boolean isGroundNutFree() {
        return groundNutFree;
    }

    public void setGroundNutFree(boolean groundNutFree) {
        this.groundNutFree = groundNutFree;
    }



    public Meal(){
        super();
    }

    public Meal(String name, int calories, String description, int protein, int carbohydrates, int fat, int fiber, int sugar, boolean diaryFree, boolean fishFree, boolean eggFree, boolean soyFree, boolean glutenFree, boolean groundNutFree,boolean meatFree,byte[] content) {
        this.name = name;
        this.calories = calories;
        this.description = description;
        this.protein = protein;
        this.carbohydrates = carbohydrates;
        this.fat = fat;
        this.fiber = fiber;
        this.sugar = sugar;
        this.diaryFree = diaryFree;
        this.fishFree = fishFree;
        this.eggFree = eggFree;
        this.soyFree = soyFree;
        this.glutenFree = glutenFree;
        this.groundNutFree = groundNutFree;
        this.content = content;
        this.meatFree = meatFree;

    }
}
