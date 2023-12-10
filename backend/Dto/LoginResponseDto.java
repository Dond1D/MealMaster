package com.example.demo.Dto;

import com.example.demo.model.User;

public class LoginResponseDto {

    private User user;

    private String jwt;


    public LoginResponseDto(){
        super();
    }

    public LoginResponseDto(User user, String jwt) {
        this.user = user;
        this.jwt = jwt;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getJwt() {
        return this.jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
