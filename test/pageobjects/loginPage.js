
class LoginPage{

    get userName(){
        return $("#username")
    }

    get passWord(){
        return $("#password")
    }

    get userRadio(){
        return $$('.customradio')[1]
    }

    get okayAlertButton(){
        return $("#okayBtn")
    }

    get accepetTerms(){
        return $("#terms")
    }

    get loginButton(){
        return $("#signInBtn")
    }

    async login(userName,passWord){

        await this.userName.setValue(userName)
        await this.passWord.setValue(passWord)
        await this.loginButton.click()

    }

}

module.exports = new LoginPage()