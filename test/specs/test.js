const expectchai = require("chai").expect

describe("WebTables",async()=>
{

    it("WebTables", async()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        const list= await $$("tr td:nth-child(1)") 
        const listNumbers = await $$("tr td:nth-child(2)")
       
        /**
         * Map
         */
        const names = await Promise.all(list.map(async e => await e.getText()))
        console.log(names)

        const numbers = await Promise.all(listNumbers.map(async e => parseInt (await e.getText())))
        console.log(numbers)


        /**
         * ForEach
         */
        list.forEach(async elem => console.log(await elem.getText()))

        /**
         * Reduce
         */
        const names2 =  names.reduce((a,b)=>a+b)
        console.log("este es el reduceee"+names2)
   
       /**
        * filter
        */
       const names3 = names.filter(n=>n === "Tomato")
       console.log("names after filter "+ names3)
    })




})