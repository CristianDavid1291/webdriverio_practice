const expectchai = require("chai").expect

describe("WebTables",async()=>
{

    it("WebTables", async()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("th:nth-child(1)").click()
        const items = await $$("td:nth-child(1)")
        const nameItems = await Promise.all(items.map(async i => await i.getText()))

        copyNameItems = nameItems.slice()

        //Arrays are pass by reference
        //so you need to pass a copy to verifie sorted 
        const sortedNames = copyNameItems.sort()
        expectchai(sortedNames).to.eql(nameItems)
   

    })
    

    it("Search Validation", async()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("#search-field").setValue("tomato")
        const searchResult = await $$("td:nth-child(1)")
        //assert array size
        expect(searchResult).toBeElementsArrayOfSize({eq:1})

        //assert text inside of webElement
        expect(searchResult[0]).toHaveTextContaining("Tomato")
    
    })



})