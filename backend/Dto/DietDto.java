package com.example.demo.Dto;

import com.example.demo.model.Allergy;
import jakarta.persistence.ElementCollection;

import java.util.List;

public class DietDto {

//    private Integer id;
    private String username;
    private String selectedDiet;
    private List<String> selectedAllergies;

    public DietDto() {
        super();
    }

//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSelectedDiet() {
        return selectedDiet;
    }

    public void setSelectedDiet(String selectedDiet) {
        this.selectedDiet = selectedDiet;
    }

    public List<String> getSelectedAllergies() {
        return selectedAllergies;
    }

    public void setSelectedAllergies(List<String> selectedAllergies) {
        this.selectedAllergies = selectedAllergies;
    }

    public DietDto(String username, String selectedDiet, List<String> selectedAllergies) {
        this.username = username;
        this.selectedDiet = selectedDiet;
        this.selectedAllergies = selectedAllergies;
    }
}
