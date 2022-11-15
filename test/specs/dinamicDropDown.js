describe("Dinamic dropdwn",async ()=>{

    it("dinamic drop down TC001",async ()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        const item = await $$("li.ui-menu-item div")
        
        

        // items.forEach( async element => {
        //     console.log(await element.getText()+"******")
        // })

        for (var i = 0; i< await item.length; i++){
            if(await item[i].getText() ==="India"){
                await item[i].click()
            }
        }

        await browser.pause(5000)
    })


})