const { Given, When, Then, setDefaultTimeout}=require('@cucumber/cucumber');
const AdactinPage =require('../Pages/adactinpage');
//Only Login Function.Scenario 1 and Scenario 2 in Feature
Given('To Launch the Browser and Open the Adactin page Url in a newpage',async function () {
        this.Ad=new AdactinPage(page);
        await this.Ad.webPage('https://adactinhotelapp.com/index.php');
           
         });
When('To Enter the Valid Username and Valid Password in Respective Fields and Click Login Button',async function () {
         await this.Ad.login("Bharath63","Bharath@28");
         });

Then('To Close The Browser',function () {
           console.log('Only Login Test')
         });


//Adacting Login and Booking Hotel Room.Scenario 1 and Scenario 2 in Feature
        setDefaultTimeout(60*1000);
Given('To Launch Browser and Open the Adactin page Url in a newpage',async function () {
           this.Ad=new AdactinPage(page);
        await this.Ad.webPage('https://adactinhotelapp.com/index.php');
         });
      When('To Enter the valid Username and valid Password in Respective Fields and Click Login',async function () {
           await this.Ad.login("Bharath63","Bharath@28");
         });

         Then('Select Room Preference',async function () {
           
                await this.Ad.roomSelection();
         });
         When('Booking Done Verify The Order',async function () {    
           await this.Ad.verifyRoom();
           await this.Ad.bookingProcess();
         });
         When('Generated Order ID',async function () {
                console.log('Booking Room After Login')
           await this.Ad.orderReport();
         });  
        Then('To Close Browser', function () {
          
         });


//Multiple User Login Using Scenario Outline in a Feature.
setDefaultTimeout(60*1000);
 Given('Launch Browser and Load Adactin Page', async function () {
          this.Ad=new AdactinPage(page);
          await this.Ad.webPage('https://adactinhotelapp.com/index.php');
         });
       
 When('login with username {string} and password {string} then click login',async function (string, string2) {
        if(string=="Bharath63" && string2=="Bharath@28"){   
        await this.Ad.login(string, string2);
        console.log(`login with username ${string} and password ${string2}`);
        }
        else{
        await this.Ad.login(string, string2);
        console.log(`login with username ${string} and password ${string2}`);
        
        }
         });
Then('Verify Login status {string}', function (loginstatus) {
  console.log(loginstatus)
  console.log("")
  });
  

