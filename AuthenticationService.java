package com.example.demo.Service;

import com.example.demo.Dto.CartItemDto;
import com.example.demo.Dto.DietDto;
import com.example.demo.Dto.LoginResponseDto;
import com.example.demo.Dto.RegistrationProfileDto;
import com.example.demo.model.*;
import com.example.demo.model.IngredientDto;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.text.ParseException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ImageRepository imageRepository;


    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private DietRepository dietRepository;

    @Autowired
    private MealsRepository mealsRepository;

    @Autowired
    private ShoppingRepository shoppingRepository;

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private IngredientRepository ingredientRepository;

    public void saveImage(ImageEntity imageEntity) {
        imageRepository.save(imageEntity);
    }

    public List<Cart> getCart(){
        return cartRepository.findAll();
    }

    public List<Order> getOrder(){
        return orderRepository.findAll();
    }


    public void deleteOrder(Long orderId){
        Optional<Order> orderOptional = orderRepository.findById(orderId);

        if(orderOptional.isPresent()){
            Order order = orderOptional.get();
                orderRepository.delete(order);
        }else {
            throw new NoSuchElementException("Order not found with ID: " + orderId);
        }
    }

    public List<Meal> getMeals() {
        return mealsRepository.findAll(); // Assuming mealRepository is your repository for meals
    }

    public Meal saveMeal(Meal meal, MultipartFile imageFile) {
        return mealsRepository.save(meal);
    }

    public Shopping saveProduct(Shopping shopping,MultipartFile imageFile){
        return shoppingRepository.save(shopping);
    }
    public List<Shopping> getProducts() {
        return shoppingRepository.findAll(); // Assuming mealRepository is your repository for meals
    }

public User registerUser(String name, String surname, String username, String password, String gender) throws ParseException {
    String encodedPassword = passwordEncoder.encode(password);
    Role userRole = roleRepository.findByAuthority("USER").get();
    Set<Role> authorities = new HashSet<>();

    authorities.add(userRole);

    return userRepository.save(new User(0, name, surname, username, encodedPassword,  gender, authorities));
}
    public LoginResponseDto loginUser(String username, String password) {

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            String token = tokenService.generateJwt(auth);
            return new LoginResponseDto(userRepository.findByUsername(username).get(), token);

        } catch (AuthenticationException e) {
            // Handle authentication failure here
            return new LoginResponseDto(null, "");
        }
    }

    public Meal saveMeallWithIngredient(Meal meal, List<IngredientDto> ingredientDto, MultipartFile image) throws IOException {
        if(ingredientDto == null){
            throw new IllegalArgumentException("Ingredients cannot be null");
        }

        List<Ingredient> ingredientList = ingredientDto.stream()
                .map(ingredient1 -> {
                    Ingredient ingredient2 = new Ingredient();
                    ingredient2.setName(ingredient1.getName());
                    ingredient2.setQuantity(ingredient1.getQuantity());
                    return ingredient2;
                })
                .collect(Collectors.toList());


        meal.setIngredients(ingredientList);
        ImageEntity imageEntity = new ImageEntity();
        imageEntity.setName(image.getOriginalFilename());
        imageEntity.setContent(image.getBytes());
        meal.setImage(imageEntity);

        for (Ingredient ingredient : ingredientList) {
            ingredientRepository.save(ingredient);
        }
        mealsRepository.save(meal);
        return meal;
    }

    public Order saveOrder(String address, String telephone, List<CartItemDto> cartItem,Double total) {
        if (cartItem == null) {
            throw new IllegalArgumentException("Cart items cannot be null");
        }


        // Convert CartItemDto to Cart entity
            List<Cart> carts = cartItem.stream()
                    .map(cartItemDto -> {
                        Cart cart = new Cart();
                        cart.setName(cartItemDto.getName());
                        cart.setPrice(cartItemDto.getPrice());
                        cart.setQuantity(cartItemDto.getQuantity());
                        return cart;
                    })
                    .collect(Collectors.toList());

            // Create an order and set its properties
            Order order = new Order(address, telephone, carts,total);

            // Save the order (this will cascade to save the cart items)
            orderRepository.save(order);

            return order;
        }




    public RegistrationProfileDto registerProfile(RegistrationProfileDto profileDto) {

        Optional<User> userOptional = userRepository.findByUsername(profileDto.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Create a UserProfile object and set the profile data
            UserProfile userProfile = new UserProfile();
            userProfile.setWeightgoal(profileDto.getWeightgoal());
            userProfile.setHeight(profileDto.getHeight());
            userProfile.setWeight(profileDto.getWeight());
            userProfile.setAge(profileDto.getAge());
            userProfile.setActivity(profileDto.getActivity());

            // Set the UserProfile to the user
            user.setUserProfile(userProfile);

            // Save the user
            userRepository.save(user);

            return profileDto;
        }

        return null;

    }

    public void updateProfile(String username, UserProfile updatedProfile) {
        Optional<User> userOptional = userRepository.findByUsername(username);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            UserProfile userProfile = user.getUserProfile();
            if (updatedProfile.getWeight() != userProfile.getWeight() && updatedProfile.getHeight() != userProfile.getHeight()) {
                userProfile.setWeight(updatedProfile.getWeight());
                userProfile.setHeight(updatedProfile.getHeight());
            } else if (updatedProfile.getHeight() != userProfile.getHeight()) {
                userProfile.setHeight(updatedProfile.getHeight());
            } else if (updatedProfile.getWeight() != userProfile.getWeight()) {
                userProfile.setWeight(updatedProfile.getWeight());
            } else {
                return;
            }
            user.setUserProfile(userProfile);
            userRepository.saveAndFlush(user);
        }
    }


    public DietDto registerDiet(DietDto dietDto) {

        Optional<User> userOptional = userRepository.findByUsername(dietDto.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            Diet diet = new Diet();
            diet.setSelectedDiet(dietDto.getSelectedDiet());

            List<String> selectedAllergies = dietDto.getSelectedAllergies();

            List<Allergy> allergyList = new ArrayList<>();

            for(String allergyName : selectedAllergies){
                Allergy allergy = new Allergy();
                allergy.setName(allergyName);
                allergy.setDiet(diet);
                allergyList.add(allergy);
            }

            diet.setAllergy(allergyList);

            // Set the Diet to the user
            user.setDiet(diet);
            // Save the user
            userRepository.save(user);

        }
        return dietDto;
    }


    public Contact saveContact(Contact contact){
      return   contactRepository.save(contact);
    }

    public List<Meal> getMealsForUser(String username) {
        List<Meal> filteredMeals = new ArrayList<>();
        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isPresent()) {
            User newUser = userOptional.get();
            Diet diet = newUser.getDiet();
            String userDiet = diet.getSelectedDiet();

            List<Meal> allMeals = mealsRepository.findAll();

            for (Meal meal : allMeals) {
                if (isMealAllowed(meal, userDiet, newUser)) {
                    filteredMeals.add(meal);
                }
            }
            printAllergies(newUser);
        }


        return filteredMeals;
    }

    private boolean isMealAllowed(Meal meal, String userDiet, User user) {
        boolean allowed = checkDietaryPreferences(meal, userDiet) && checkAllergies(meal, user);
        if (!allowed) {
            System.out.println("Meal not allowed: " + meal.getName() + " " + meal.getId());
        }
        return allowed;
    }

    private boolean checkDietaryPreferences(Meal meal, String userDiet) {
        if (userDiet != null) {
            if ("Anything".equals(userDiet)) {
                return true;
            }else if("Meat".equals(userDiet)  && !meal.isMeatFree()){
                return true;
            }
            else if ("Vegetarian".equalsIgnoreCase(userDiet) && (meal.isMeatFree() || meal.isFishFree())) {
                return true; // Exclude meals with meat for vegetarian users
            } else if ("Vegan".equalsIgnoreCase(userDiet) && (meal.isMeatFree() || meal.isDiaryFree())) {
                return true; // Exclude meals with meat or dairy for vegan users
            }
            return false;  // Exclude meals that don't match the specified diet
        }

        // If there's no user diet information, consider the meal as not matching the preferences
        return false;
    }

    public void printAllergies(User user){
        Diet diet = user.getDiet();
        List<String> dietAllergies = diet.getAllergy().stream()
                .map(Allergy::getName)
                .collect(Collectors.toList());
        System.out.println(dietAllergies);
    }

    private boolean checkAllergies(Meal meal, User user) {
        Diet diet = user.getDiet();
        boolean value = false;
        List<String> dietAllergies = diet.getAllergy().stream()
                .map(Allergy::getName)
                .collect(Collectors.toList());

        List<String> mealIngredients = meal.getIngredients().stream()
                .map(Ingredient::getName)
                .collect(Collectors.toList());

        for (String ingredient : mealIngredients) {
            for (String allergy : dietAllergies) {
                if (ingredient.equalsIgnoreCase(allergy)) {
                    return value;
                    // Return false if there is a match

                }
            }
        }

        // If no matches were found, return true
        return !value;
    }




//    public double calculateCalories(User user){
//        Optional<User> userOptional = userRepository.findByUsername(user.getUsername());
//        double Bmr = 0.0;
//        double calories = 0.0;
//        if(userOptional.isPresent()){
//            User newUser = userOptional.get();
//            UserProfile userProfile = newUser.getUserProfile();
//            if(userProfile == null){
//                throw new IllegalArgumentException("UserProfile is null");
//            }else{
//                double weight = userProfile.getWeight();
//                double height = userProfile.getHeight();
//                int age = userProfile.getAge();
//                String gender = newUser.getGender();
//                double activity = userProfile.getActivity();
//
//                if("Male".equals(gender)){
//                    Bmr = 88.362 + (13.397 * weight) + (4.799*height) - (5.677 * age);
//                }else{
//                    Bmr = 447.593+ ( 9.247 * weight) + ( 3.098 * height) - ( 4.330 * age);
//                }
//
//                calories = Bmr * activity;
//            }
//        }
//
//        return calories;
//    }


}
