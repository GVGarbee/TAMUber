# feature/show_route.feature
Feature: Add route display so I know the way we are going
  As a passenger
  I want to be able to see the route that has been chosen
  So that I can have an estimate for arrival time/know how close to destination we are

Scenario: User sees the map
  When I go to the homepage
  Then I should see the map
  
Scenario: User sees the route
  When I go to the homepage
  Then I should see the route
  
Scenario: User sees the correct route
  When I go to the homepage
  Then I should see the correct "start" and "end" points