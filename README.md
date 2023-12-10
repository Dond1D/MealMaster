MealMaster Application

MealMaster is a web application developed using React for the frontend and Spring Boot for the backend. It is designed to provide users with personalized meal recommendations based on 
their profiles, dietary restrictions, and food preferences. Additionally, users can purchase recommended meals through the shopping section.This application used mysql database.

Features

User Profiles

Users can create profiles and specify their dietary preferences, allergies, and food restrictions.
Personalized meal recommendations based on user profiles.
They can  change their profile like height or weight after the user has been created.

Shopping

Users can view and purchase recommended meals through the shopping section.
They can select the amount and based on their price,a total will be displayed in the end of the page for their purchases.

Contact Form

Users can contact the company filling the contact form and sending the description they need.


Users Authorization and Authentication

Users will have to login by the username and a password which needs to have a number, more than 8 characters an uppercase character.In the backend the passwords are encrypted,and every time a user logs in , a new JWT will be  generated and provided as a secure authentication token.

User Roles
Admin: Manages deliveries, contact forms, and system configurations.

Nutritionist: Access to user profiles and can provide personalized dietary advice.
Delivery: Manages and updates order statuses.
User: Utilizes the main features like profile management, meal recommendations, and shopping.

This project was hosted on localhost for frontEnd on port 3000, in the backend was hosted on port 8080, and the database 3306.

