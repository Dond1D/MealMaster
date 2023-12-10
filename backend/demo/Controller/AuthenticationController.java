    package com.example.demo.Controller;

    import com.example.demo.Dto.*;

    import com.example.demo.Service.AuthenticationService;
    import com.example.demo.model.*;
    import com.example.demo.model.IngredientDto;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.format.annotation.DateTimeFormat;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.MediaType;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;
    import org.springframework.web.multipart.MultipartFile;

    import java.io.File;
    import java.io.IOException;
    import java.text.ParseException;
    import java.util.Date;
    import java.util.List;
    import java.util.Map;
    import java.util.NoSuchElementException;
    import java.util.stream.Collectors;

    @RestController
    @RequestMapping("/auth")
    @CrossOrigin(origins = "http://localhost:3000")
    public class AuthenticationController {

        @Autowired
        private AuthenticationService authService;


        @PostMapping("/upload")
        public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
            try {
                ImageEntity imageEntity = new ImageEntity();
                imageEntity.setName(file.getOriginalFilename());
                imageEntity.setContent(file.getBytes());
                authService.saveImage(imageEntity);
                return ResponseEntity.ok("Image uploaded successfully.");
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image.");
            }
        }
        @PostMapping("/meals")
        public ResponseEntity<String> createMeal(
                @RequestPart("meal") Meal meal,
                @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
            try {
                ImageEntity imageEntity = new ImageEntity();
                imageEntity.setName(image.getOriginalFilename());
                imageEntity.setContent(image.getBytes());
                meal.setImage(imageEntity);
                Meal savedMeal = authService.saveMeal(meal, image);
                if (savedMeal != null) {
                    return ResponseEntity.ok("Meal created successfully.");
                }
            } catch (IOException e) {
                throw new IOException("Meal not created.Something error" + e);
            }
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating the meal.");
        }

        @PutMapping("/profile/{username}")
        public void updateProfile(@PathVariable String username,@RequestBody UserProfile updatedProfile){
            authService.updateProfile(username, updatedProfile);
        }

        @PostMapping("/ingredients")
        public ResponseEntity<String> saveMealWithIngredient(
                @RequestPart("meal") Meal meal,
                @RequestPart(value = "ingredients", required = false) List<IngredientDto> ingredientDtoList,
                @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
            try {
                Meal savedMeal = authService.saveMeallWithIngredient(meal,ingredientDtoList,image);
                if (savedMeal != null) {
                    return ResponseEntity.ok("Meal created successfully.");
                }
            } catch (IOException e) {
                throw new IOException("Meal not created.Something error" + e);
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating the meal.");
        }

        @PostMapping("/shopping")
        public ResponseEntity<String> createProduct(@RequestPart("product") Shopping shopping,@RequestPart( value = "image") MultipartFile image) throws IOException {
            try{
                ImageEntity imageEntity = new ImageEntity();
                imageEntity.setContent(image.getBytes());
                imageEntity.setName(image.getName());
                shopping.setImage(imageEntity);
                Shopping savedProduct = authService.saveProduct(shopping,image);
                if (savedProduct != null) {
                    return ResponseEntity.ok("Product created successfully.");
                }
            }catch (IOException e){
                throw new IOException("Shopping cart not created.Something error" + e);
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating the product .");
        }

        @PostMapping("/register")
        public User registerUser(@RequestBody User user) throws ParseException {
            return authService.registerUser(user.getName(), user.getSurname(), user.getUsername(), user.getPassword(), user.getGender());
        }

        @PostMapping("/profile")
        public RegistrationProfileDto registerProfile(@RequestBody RegistrationProfileDto registrationProfileDto) {
            return authService.registerProfile(registrationProfileDto);
        }


        @PostMapping("/login")
        public LoginResponseDto loginUser(@RequestBody RegistrationDto registrationDto) {
            return authService.loginUser(registrationDto.getUsername(), registrationDto.getPassword());
        }


        @PostMapping("/diet")
        public DietDto registerDiet(@RequestBody DietDto dietDto) {
            return authService.registerDiet(dietDto);
        }
        @PostMapping("/contact")
        public Contact saveContact(@RequestBody Contact contact) {
            return authService.saveContact(contact);
        }

        @PostMapping("/items")
        public Order createOrder(@RequestBody OrderWithTotalDto orderRequest) {
            String address = orderRequest.getAddress();
            String telephone = orderRequest.getTelephone();
            List<CartItemDto> cartItems = convertCartListToDtoList(orderRequest.getCartItems());
            Double total = orderRequest.getTotal();

            // Call the service method to save the order
            return authService.saveOrder(address, telephone, cartItems,total);
        }


        private List<CartItemDto> convertCartListToDtoList(List<Cart> carts) {
            return carts.stream()
                    .map(cart -> {
                        CartItemDto cartItemDto = new CartItemDto();
                        cartItemDto.setName(cart.getName());
                        cartItemDto.setPrice(cart.getPrice());
                        cartItemDto.setQuantity(cart.getQuantity());
                        return cartItemDto;
                    })
                    .collect(Collectors.toList());
        }


        @GetMapping("/getMeals")
        public List<Meal> getMeals(){
            return authService.getMeals();
        }

        @GetMapping("/getCart")
        public List<Cart> getCarts(){
            return authService.getCart();
        }

        @GetMapping("/getOrder")
        public List<Order> getOrder(){
            return authService.getOrder();
        }

        @DeleteMapping("/{orderId}")
        public ResponseEntity<String> deleteOrder(@PathVariable Long orderId) {
            try {
                authService.deleteOrder(orderId);
                return new ResponseEntity<>("Order deleted successfully", HttpStatus.OK);
            } catch (IllegalArgumentException e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
            } catch (NoSuchElementException e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
            }
        }


        @GetMapping("/getProducts")
        public List<Shopping> getProducts(){
            return authService.getProducts();
        }

        @GetMapping("/mealsSpecified")
        public List<Meal> getMealsForUser(@RequestParam String username){

            return authService.getMealsForUser(username);
        }
    }