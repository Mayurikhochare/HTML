export const increment=(val)=>{
    return{
        type:"INCREMENT",
        value:val

    }
}
export const decrement=(val)=>{
    return{
        type:"DECREMENT",
        value:val
    }
}
export const login=()=>{
    return{
        type:"SIGNIN"
        
    }
}