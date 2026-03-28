const {test,expect}=require('@playwright/test');
class AdactinPage{
        constructor(page){
        
        this.page=page
        this.username=page.locator("#username")
        this.password=page.locator("#password")
        this.logButton=page.locator("#login")
        this.Location=page.locator("//select[@name='location']")
        this.hotel=page.locator("//select[@name='hotels']")
        this.roomType=page.locator('//select[@name="room_type"]')
        this.rooms=page.locator('#room_nos')
        this.checkIn=page.locator('#datepick_in')
        this.checkOut=page.locator('#datepick_out')
        this.apr= page.locator('#adult_room')
        this.cpr= page.locator('#child_room')
        this.radio=page.locator('#radiobutton_0')
        this.con=page.locator('#continue')
        this.fname=page.locator('#first_name')
        this.lname=page.locator('#last_name')
        this.addr=page.locator('#address')
        this.creditCard=page.locator('#cc_num')
        this.cardType=page.locator('#cc_type')
        this.cardExpMon=page.locator('#cc_exp_month')
        this.cardExpY=page.locator('#cc_exp_year')
        this.cvv=page.locator('#cc_cvv')
        this.book=page.locator('#book_now')
        this.orderID=page.locator('#order_no')
    };
    async webPage(url){
        await this.page.goto(url)
    };
    async login(user,pass){
        await this.username.fill(user)
       await this.password.fill(pass)
        await this.logButton.click()
    };
    async roomSelection(city,hotel,bed,rooms,){
     
     await this.Location.selectOption({value:"London"})
     await this.page.waitForTimeout(1000)
     await this.hotel.selectOption({value:"Hotel Sunshine"})
     await this.page.waitForTimeout(1000)
     await this.roomType.selectOption({value:"Double"})
     await this.page.waitForTimeout(1000)
     await this.rooms.selectOption({label:"2 - Two"})
     await this.page.waitForTimeout(1000)
     await this.checkIn.press("Control+a")
     await this.checkIn.press("Backspace")
     await this.checkIn.fill("19/03/2026")
     await this.page.waitForTimeout(1000)
     
     await this.checkOut.press("Control+a")
     await this.checkOut.press("Backspace")
     await this.checkOut.fill("19/03/2026")
     await this.page.waitForTimeout(1000)
     
     await this.apr.selectOption({value:"1"})
     await this.page.waitForTimeout(1000)
    
     await this.cpr.selectOption({value:"1"})
     await this.page.waitForTimeout(1000)
     await this.page.locator('#Submit').click()
    };

    async verifyRoom(){
        this.radio.check()
        await this.page.waitForTimeout(1000)
        await this.con.click()
    };
    async bookingProcess(){
     await this.fname.fill('Bharath') 
     await this.lname.fill('Raj') 
     await this.addr.fill('Chennai') 
     await this.creditCard.fill('9876543210987456') 
     await this.cardType.selectOption({value:"VISA"}) 
     await this.cardExpMon.selectOption({value:"4"}) 
     await this.cardExpY.selectOption({label:"2029"}) 
     await this.cvv.fill('123')
      
     await this.book.click()
     await this.page.waitForTimeout(1000)
    };
    async orderReport(){
    let oId= await this.orderID.getAttribute('value')
    console.log('Order ID:')
     console.log(oId)
     await this.page.waitForTimeout(1000)
    };
    
};
module.exports=AdactinPage;
