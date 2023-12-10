package com.example.demo.Dto;

import com.example.demo.model.Cart;

import java.util.List;

public class OrderRequestDto {



    private String address;
    private String telephone;
    private List<Cart> cartItems;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public List<Cart> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<Cart> cartItems) {
        this.cartItems = cartItems;
    }
}
