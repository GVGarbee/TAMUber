# feature/show_auth.feature
Feature: Add route explanation for obstructions
  As a passenger
  So that I can know why we have stopped
  I want to be informed of unplanned stops

Scenario: Cart stops and displays info
  When The cart stops
  Then I should see info about why it stopped