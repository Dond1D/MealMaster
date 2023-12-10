package com.example.demo.repository;

import com.example.demo.model.Shopping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingRepository extends JpaRepository<Shopping,Integer> {
}
