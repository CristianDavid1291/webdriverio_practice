class ReviewPage {

    get pricesList(){
        return $$("tr td:nth-child(4) strong")
    }

    get checkOutButton(){
        return $(".btn-success")
    }

    async sumOfProducts(){
        return (await Promise.all(await this.pricesList.map(async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim()))))
        .reduce((acc,price)=>acc+price,0)
    }

 
    async sumOfProductsSoftware(){
        return parseInt((await $("h3 strong").getText()).split(".")[1].trim())
    }


}
module.exports = new ReviewPage()