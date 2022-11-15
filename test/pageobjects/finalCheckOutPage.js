class FinalCheckOut{
    
    get country(){
        return $("#country")
    }

    get suggestions(){
        return $(".suggestions a")
    }

    get indiaOption(){
        return $("=India")
    }

    get succesButton(){
        return $("input.btn-success")
    }

    get succesAlert(){
        return $(".alert strong")
    }
}

module.exports = new FinalCheckOut()