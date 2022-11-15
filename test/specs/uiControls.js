const expectchai = require("chai").expect

describe("UI Controls",async()=>
{

    it("UIRadioButton_and_Alert", async()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[id='username']").setValue("rahulshettyacademy")
        await $("input[id='password']").setValue("learning")
        
        //capturing multiple elements
       
        //scope from webElement
        const radioButtons = $$("#usertype");
        const adminRadioBtn = radioButtons[0];
        const userRadioBtn = radioButtons[1];



        await userRadioBtn.click()
        await $(".modal-body").waitForDisplayed()
        await $("#okayBtn").click()
        
        //select drop down
        const dropdown = $("select.form-control")
        await dropdown.selectByAttribute("value","consult")
        await dropdown.selectByVisibleText("Teacher")
        await dropdown.selectByIndex(0)
        

        //chai assertions
        expectchai(await dropdown.getValue()).to.equal("stud")

    

        await browser.pause(3000)


        // await $("input[id='signInBtn']").click()


    })



})