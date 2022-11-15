describe("Ecommerce Application",async()=>
{

    it("Login fail page", async()=>{

        //webdriverio_code
        //webdriverio Async (Sync)
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        //promise => resolved, pending, rejected
        console.log(await browser.getTitle())
        //verify tittle - partial text
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        //css selector, xpath
        await $("input[id='username']").setValue("Cristian")
        await $("input[id='password']").setValue("123456")
        await $("input[id='signInBtn']").click()
        browser.waitUntil(async() => await $("#signInBtn").getAttribute("value") === "Sign In",{
            timeout: 5000,
            timeoutMsg: "Alert display didn't change after 5 seg"
        })
        await console.log("soy yooooo" + await $(".alert-danger").getText())
        
        await browser.pause(5000)


    })

    it("Login succesfully", async()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[id='username']").setValue("rahulshettyacademy")
        await $("input[id='password']").setValue("learning")
        await $("input[id='signInBtn']").click()
        browser.waitUntil(async()=>{await $("a.btn-primary").isDisplayed()},{
            timeout:5000,
            timeoutMsg: "Time out Loggin"
        })
        await expect(browser).toHaveUrlContaining("shop")


    })


})