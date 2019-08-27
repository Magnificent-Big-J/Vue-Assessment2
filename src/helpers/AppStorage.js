class AppStorage {
  storeToken(token) {
    localStorage.setItem('token',token)
  }
  storeUser(user) {
    localStorage.setItem('user',user)
  }
  store(user,token,type) {
    this.storeToken(token)
    this.storeUser(user)
    this.storeType(type)
  }
  storeType(type) {
    localStorage.setItem('type',type)
  }
  clear() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('type')
  }
  getToken() {
    return localStorage.getItem('token')
  }
  getUser() {
    return localStorage.getItem('user')
  }
  getType(){
    return localStorage.getItem('type')
  }

}

export default  AppStorage = new AppStorage()
