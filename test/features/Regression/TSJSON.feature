Feature: Timesheet Website

  # Scenario Outline: As a user, I can log into the timesheet Website

  #   Given Launch browser and load the url "https://staging-timesheet.railsfactory.com/"
  #   When I login with "ayyamuthu@sedintechnologies.com" and "ayyamuthu123"
  #   Then Navigate to Add new Timesheet
  #   And Veriffy Timesheet functions 
  #   And Logout from website
  
      
    Scenario Outline: As a user, I can log into the timesheet Website

    Given Launch browser and load the url "https://staging-timesheet.railsfactory.com/"
    When I login with "ayyamuthu@sedintechnologies.com" and "ayyamuthu123"
    Then Navigate to Add new Timesheet
    And Veriffy Timesheet functions <datapath>
    And Logout from website
   Examples:
      | datapath  |
      | data1.json|
      # | data2.json|
      # | data3.json|
      # | data4.json|
      
      