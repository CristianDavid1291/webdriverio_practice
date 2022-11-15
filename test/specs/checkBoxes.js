describe("CheckBoxes and Creenshot",async ()=>{


    it("CheckBoxes",async ()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const checkBoxses = await $$("input[type='checkbox']")
        await checkBoxses[0].click()
        console.log(await checkBoxses[0].isSelected())
        await browser.saveScreenshot("myFirstScreenshot.png")

    })




})