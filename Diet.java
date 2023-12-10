package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table()
public class Diet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "diet_id")
    private Integer id;

    private String selectedDiet;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "diet")
    @JsonManagedReference
    public List<Allergy> selectedAllergies;

    //   = new ArrayList<>()
    public List<Allergy> getAllergy(){return selectedAllergies;}

    public void setAllergy(List<Allergy> selectedAllergies){
        this.selectedAllergies = selectedAllergies;
    }


//    public void addAllergy(Allergy allergy) {
//        selectedAllergies.add(allergy);
//        allergy.setDiet(this);
//    }
//    public void removeAllergy(Allergy allergy) {
//        selectedAllergies.remove(allergy);
//        allergy.setDiet(null);
//    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSelectedDiet() {
        return selectedDiet;
    }

    public void setSelectedDiet(String selectedDiet) {
        this.selectedDiet = selectedDiet;
    }

//    public List<Allergy> getSelectedAllergies() {
//        return selectedAllergies;
//    }
//
//    public void setSelectedAllergies(List<Allergy> selectedAllergies) {
//        this.selectedAllergies = selectedAllergies;
//    }


}
