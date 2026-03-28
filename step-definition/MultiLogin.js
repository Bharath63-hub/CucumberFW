const { Given, When, Then, setDefaultTimeout}=require('@cucumber/cucumber');
const AdactinPage =require('../Pages/adactinpage');
//Adactine Multiple Booking using scenario and Scenario Outline in Feature
  Given('Launch Browser and Open the Adactin page Url in a newpage',async function () {
            this.Ad=new AdactinPage(page);
        await this.Ad.webPage('https://adactinhotelapp.com/index.php');
         });
         When('Enter Username and Password in Respective Fields and Click Login',async function () {
           await this.Ad.login("Bharath63","Bharath@28");
         });
         Then('Select the Room',async function () {       
            await this.Ad.roomSelection();
         });
         When('Booking Done Verify Order placed',async function () {        
           await this.Ad.verifyRoom();
           await this.Ad.bookingProcess();
         });
         When('Generate the Order ID',async function () {
            console.log('Order Placed For Single User')
           await this.Ad.orderReport();
         });
         Then('Close the Browser', function () {
           
         });


//Multiple user Login And Try Booking With Invalid User         
 Given('Launch the Browser and Load Adactin Page',async function () {
           this.Ad=new AdactinPage(page);
        await this.Ad.webPage('https://adactinhotelapp.com/index.php');
         });
         When('login with the username {string} and password {string} then click login',async function (user, pass) {
          if(user=="Bharath63" && pass=="Bharath@28"){   
        await this.Ad.login(user, pass);
        console.log(`login with username ${user} and password ${pass}`);
        }
        else{
        await this.Ad.login(user, pass);
        console.log(`login with username ${user} and password ${pass}`);
        }
         });
         Then('Verify Login the status {string}',async function (loginstatus) {
          console.log(loginstatus)
         });
         Then('Select the Room Preference for {string}',async function (user) { 
           if(user=="Bharath63"){    
            await this.Ad.roomSelection();
           }
         });
         When('Booking Done Verify Order {string}',async function (user) { 
           if(user=="Bharath63"){   
            await this.Ad.verifyRoom();
           await this.Ad.bookingProcess();
           }      
         });
         When('Generate Order ID {string}',async function (user) {
            if(user=="Bharath63"){   
            console.log('Order Placed for Valid User')
           await this.Ad.orderReport();
            }
         });
         Then('Close Browser {string}', function (user) {
          if(user!="Bharath63"){
          console.log('Login Failed So Tests Skipped');
          }
         });