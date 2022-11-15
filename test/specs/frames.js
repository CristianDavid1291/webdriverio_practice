const expectchai = require("chai").expect

describe("Frames",async()=>
{

    it("Frames", async()=>{
        
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await console.log("linksss" +await $$("a").length)
        await $("#courses-iframe").scrollIntoView()
        await browser.switchToFrame(await $("#courses-iframe"))
        

        // //link text
         await $("=Courses").getTagName()
         await console.log("iframe links "+await $$("a").length)
         await browser.switchToFrame(null)


    })

})