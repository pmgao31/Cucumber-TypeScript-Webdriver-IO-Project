Feature: Timesheet Website

  Scenario Outline: As a user, I can log into the timesheet Website

    Given Launch browser and load the url "https://staging-timesheet.railsfactory.com/"
    When I login with "ayyamuthu@sedintechnologies.com" and "ayyamuthu123"
    Then Navigate to Add new Timesheet
    And Veriffy Timesheet functions <date>, <activity>,<hours>, <comments>
    And Logout from website
   Examples:
      | date       | activity |hours|comments					        |
      | 18-08-2022 | 1 		    | 8   |Learnning WebDriver IO 	|
      # | 19-08-2022 | 2	      | 8   |Official Travel 			    |
      # | 20-08-2022 | 3 			  | 8   |Medical leave 			      |
      # | 21-08-2022 | 4  	  	| 8   |Diwali local holiday   	|
      