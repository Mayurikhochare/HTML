class User{
    static count=0
    constructor(username){
        this.username=username
        this.count=++User.count
        
    }
    
}
let u1=new User("johnsmith10")
let u2 = new User("marysue1989")

console.log(User.count)
