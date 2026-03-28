@Hotel
Feature: Validate Invalid User can Login and Book Hotel.

@Hotel @sanity
Scenario: Select Room and Validate Booked Room and Generate Order ID For Single User
Given Launch Browser and Open the Adactin page Url in a newpage
When Enter Username and Password in Respective Fields and Click Login
Then Select the Room
When Booking Done Verify Order placed
And Generate the Order ID
Then Close the Browser

@Hotel @smoke
Scenario Outline: Select Room and Validate Booked Room and Generate Order ID For Multiple User
Given Launch the Browser and Load Adactin Page
When login with the username "<user>" and password "<pass>" then click login 
Then Verify Login the status "<login status>"
Then Select the Room Preference for "<user>"
When Booking Done Verify Order "<user>"
And Generate Order ID "<user>"
Then Close Browser "<user>"


Examples:

|user       |pass       |login status          |
|Raj        |Raj@123    |Invalid Credential    |
|Bharath    |Bharath@2  |Invalid Credential    |
|Bharath63  |Bharath@28 |Logged in Successfully|