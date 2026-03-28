@Adactin
Feature: To Validate Login Functionality With Multiple Users

@Adactin @login @smoke
Scenario Outline: Verify login with Different User Inputs
Given Launch Browser and Load Adactin Page
When login with username "<user>" and password "<pass>" then click login 
Then Verify Login status "<login status>"


Examples:

|user       |pass       |login status          |
|Raj        |Raj@123    |Invalid Credential    |
|Bharath    |Bharath@2  |Invalid Credential    |
|Bharath63  |Bharath@28 |Logged in Successfully|