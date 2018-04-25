# feature/show_auth.feature
Feature: Add authentication to pickup
  As a passenger
  So that I can know I'm on the right route/driver
  I want to have an authentication method

Scenario: User can log in
  When I enter a valid UIN
  Then I should see my user info
    
Scenario: User sees driver info
  When I enter a valid UIN
  Then I should see the driver info
  
Scenario: Invalid UINs are rejected
  When I enter an invalid UIN
  Then I should see a rejection message
