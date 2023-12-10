package com.example.demo.Controller;

import com.example.demo.Service.AuthenticationService;
import com.example.demo.model.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/delivery")
@CrossOrigin("http://localhost:3000")
public class DeliveryController {


    @GetMapping("/")
    public String getNutritionist(){
        return "Nutritionist access control";
    }


}
