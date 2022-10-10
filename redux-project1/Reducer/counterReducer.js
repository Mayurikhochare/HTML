

const counterReducer=(state=0,action)=>{
    const var1=2
    switch(action.type){
        case "INCREMENT":
            return state+var1
        case "DECREMENT":
            return state-var1
        default:
            return state        
    }
}
export default counterReducer