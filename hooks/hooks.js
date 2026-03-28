const { Before, After} = require('@cucumber/cucumber');
const { chromium }=require('playwright');
const {setDefaultTimeout}=require('@cucumber/cucumber');

Before(async ()=>{
   this.browser=await chromium.launch({headless:false});
 page=await this.browser.newPage();
 
});

After(async ()=>{
    await this.browser.close()
});