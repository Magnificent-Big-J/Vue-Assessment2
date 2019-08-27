import AppStorage from './AppStorage'
import Token from './Token'

class User {
  login(response) {
    this.responseAfterLogin(response)
  }
  responseAfterLogin(response) {
    const access_token = response.data.access_token
    const username = response.data.user[0].name
    const type = response.data.user[0].type


    if(Token.isValid(access_token)) {
      AppStorage.store(username,access_token,type)
      window.location = "/Products"
    }
  }
  config(){
    let config = {
      headers: {
        'Authorization': 'Bearer ' + AppStorage.getToken()
      }
    }

    return config
  }
  hasToken() {
    const stokedToken = AppStorage.getToken()
    if(stokedToken) {
      return Token.isValid(stokedToken) ? true : false
    }
    return false
  }
  loggedIn(){
    return this.hasToken()
  }
  logout(){

    AppStorage.clear()
    window.location = '/'

  }
  username() {
    return AppStorage.getUser()
  }
}

export default User = new User();
