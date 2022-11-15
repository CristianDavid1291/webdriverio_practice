class CheckOut{

    get checOutButton(){
        return $("*=Checkout")
     }
    
     get listCards(){
        return $$("div[class = 'card h-100']")
     }

     async clickCards(products){
        for (var i = 0; i< await this.listCards.length; i++){

            const cardTitle = await this.listCards[i].$(".card-title a")
            if(products.includes(await cardTitle.getText())){
                await this.listCards[i].$(".card-footer .btn").click()
            }
        }
     }


}

module.exports = new CheckOut()