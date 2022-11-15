const expectchai = require("chai").expect

describe("Ecommerce Application",async()=>
{

    it("E2E process", async()=>{
        /*
        List of prodcuts
        */
        const products = ["Nokia Edge","Blackberry"]

        /*
        Login process
        */
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $$('.customradio')[1].click()
        await browser.waitUntil(async()=> await $(".modal-body").isDisplayed(),{
            timeout : 5000,
            timeoutMsg : "Modal no displayed"
        })
        await $("#okayBtn").click()
        await $("#terms").click()
        await $("#signInBtn").click()
        await browser.maximizeWindow() //Max windows
        
        //EcomercePage
        const checkOut = $("*=Checkout")
        await checkOut.waitForExist() // partial link text 
        const cards = await $$("div[class = 'card h-100']")

        for (var i = 0; i< await cards.length; i++){

            const cardTitle = await cards[i].$(".card-title a")
            if(products.includes(await cardTitle.getText())){
                cards[i].$(".card-footer .btn").click()
            }
        }

        await checkOut.click()

        
        const pricesList = await $$("tr td:nth-child(4) strong")
        
        //Map with reduce
        const sumOfProducts = (await Promise.all(await pricesList.map(async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim()))))
            .reduce((acc,price)=>acc+price,0)
        
        const sumOfProductsSoftware = parseInt((await $("h3 strong").getText()).split(".")[1].trim())

        await expectchai(sumOfProducts).to.equal(sumOfProductsSoftware)

        await $(".btn-success").click()
        
        //Checkout Page

        await $("#country").setValue("ind")
        await $(".suggestions a").waitForDisplayed()
        await $("=India").click()
        await $("input.btn-success").click()

        const succesText = await $(".alert strong").getText()

        expect(succesText).toHaveText("Success!")
        
        
        await browser.pause(10000)


    })

})