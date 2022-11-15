const expectchai = require("chai").expect

describe("Windows and Frames",async()=>
{

    xit("Parent and child windows", async()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $(".blinkingText").click()
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1])
        expect(await $("h1")).toHaveTextContaining("Documents request")
        await browser.closeWindow()
        await browser.pause(3000)
        await browser.switchToWindow(windowHandles[0])

    })

    it("New window", async()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.newWindow("https://www.google.com/")//open by our automation code
        console.log(await browser.getTitle())

    })

})