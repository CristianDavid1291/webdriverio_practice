const expectchai = require("chai").expect

describe("Alerts",async()=>
{

    it("Alerts", async()=>{

        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick() 
        console.log(await browser.isAlertOpen())
        expectchai(await browser.isAlertOpen()).to.be.true
        console.log(await browser.getAlertText())
        expectchai(await browser.getAlertText()).to.equals("You double clicked me.. Thank You..")
        await browser.pause(1000)
        await browser.acceptAlert()
        await browser.pause(3000)

      

    })



})