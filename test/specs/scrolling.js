const expectchai = require("chai").expect

describe("Scrolling",async()=>
{

    it("Scrolling", async()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
        //link text
        await $("=Top").click()
        await browser.pause(3000)

    })



})