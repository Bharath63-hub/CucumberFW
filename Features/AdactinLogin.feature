
@adactin
Feature: To validate the Login Functionality for Adactin Page

@adactin @login @smoke
Scenario: To Validate Login by Valid Username and Valid Password
Given To Launch the Browser and Open the Adactin page Url in a newpage
When To Enter the Valid Username and Valid Password in Respective Fields and Click Login Button
Then To Close The Browser

@adactin @Book @regression
Scenario: Select Room and Validate Booked Room and Generate Order ID
Given To Launch Browser and Open the Adactin page Url in a newpage
When To Enter the valid Username and valid Password in Respective Fields and Click Login
Then Select Room Preference
When Booking Done Verify The Order
And Generated Order ID
Then To Close Browser
