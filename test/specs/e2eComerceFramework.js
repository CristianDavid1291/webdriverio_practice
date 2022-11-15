const expectchai = require("chai").expect
const loginPage = require("../pageobjects/loginPage")
const checkOutPage = require("../pageobjects/checkOutPage")
const ReviewPage = require("../pageobjects/reviewPage")
const FinalCheckOut  = require("../pageobjects/finalCheckOutPage")
const fs = require ("fs")

let credentials = JSON.parse(fs.readFileSync("test/testData/LoginTest.json"))
describe("Login Suite",async ()=>{

    credentials.forEach(({username,password,products}) => {
        it("Login Test case 001-Smoke",async ()=>{

            /**
             * Login Page
             */
            await browser.url("/loginpagePractise/")
            await loginPage.login(username,password)
            await browser.maximizeWindow() //Max windows
            
            /**
             * Checkout page
             */
            await checkOutPage.checOutButton.waitForExist()
            await checkOutPage.clickCards(products)
            
            await checkOutPage.checOutButton.click()
            

            /**
             * Review Page
             */
            await expectchai(await ReviewPage.sumOfProducts()).to.equal(await ReviewPage.sumOfProductsSoftware())
            await ReviewPage.checkOutButton.click()
            await browser.pause(4000)


            /**
             * Final Checkout Page
             */
            //Checkout Page

            await FinalCheckOut.country.setValue("ind")
            await FinalCheckOut.suggestions.waitForDisplayed()
            await FinalCheckOut.indiaOption.click()
            await FinalCheckOut.succesButton.click()
            expect(await FinalCheckOut.succesAlert.getText()).toHaveText("Success!")
        })
    });

})