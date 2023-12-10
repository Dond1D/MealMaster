package com.example.demo;

import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class DemoApplication {


	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder){
		return args -> {
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			Role nutritionistRole = roleRepository.save(new Role("NUTRITIONIST"));
			Role deliveryRole = roleRepository.save(new Role("DELIVERY"));
			roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);
			Set<Role> roles2 = new HashSet<>();
			roles2.add(nutritionistRole);
			Set<Role> roles3 = new HashSet<>();
			roles3.add(deliveryRole);




			User admin = new User(1, "admin", "", "admin", passwordEncoder.encode("password"), "Male", roles);
			User nutritionist = new User(2, "nutritionist", "", "nutritionist", passwordEncoder.encode("password"),  "Female", roles2);
			User delivery = new User(3, "delivery", "", "delivery", passwordEncoder.encode("password"), "Male", roles3);



			userRepository.save(admin);
			userRepository.save(nutritionist);
			userRepository.save(delivery);
		};
	}
}
