const signInReducer=(state1="Hello",action)=>{
    switch(action.type){
        case "SIGNIN":
            return " Logged In"
        default:
            return " Need to Login"    
    }
}
export default signInReducer