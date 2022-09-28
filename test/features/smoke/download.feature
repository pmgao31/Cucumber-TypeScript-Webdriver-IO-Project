Feature: Timesheet Website Download Function

  Scenario Outline: Download Activity report

    Given Launch browser and load the url "https://staging-timesheet.railsfactory.com/"
    When I login with "ayyamuthu@sedintechnologies.com" and "ayyamuthu123"
    Then Download report
    And Validate downloaded file extension
    And Logout from website
  
      