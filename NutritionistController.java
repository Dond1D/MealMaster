package com.example.demo.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:3000")
@RequestMapping("/nutri")
@RestController
public class NutritionistController {


    @GetMapping("/")
    public String getNutritionist(){
        return "Nutritionist access control";
    }
}
