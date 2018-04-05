# feature/show_route.feature
Feature: Add route explanation for planned actions so I know what we are doing
  As a (possibly visually impaired) passenger
  So that I can be aware of planned actions and be prepared
  I want to be informed of planned actions so that I can prepare for them (Maybe so they can hold onto handles)

Scenario: User sees the map
  When I go to the homepage
  Then I should see the map
  
Scenario: User sees the planned actions
  When I go to the homepage
  Then I should see the planned actions
  
Scenario: User sees the correct planned actions
  When I go to the homepage
  Then I should see the steps that make correspond to the upcoming route