import React from "react"
import './App.css';

const ToDo=({todo,remove,handleChange})=>{
    //console.log(props.todo)
    const handleCheckboxChange=()=>{
        if(todo.done)
            return null;
        handleChange(todo.id)

    }
    
    return(
        <div align="left">
            
            <input type="checkbox" checked={todo.done}
            onChange={()=>handleCheckboxChange()}
            ></input>
             <span style={todo.done?{textDecoration:"line-Through"}:null}>{todo.title}</span>
             
             <span style={{position:"fixed",
             right:5,
             paddingRight:"10px" ,
             cursor:"pointer",
             fontWeight:600}}
             onClick={()=>remove(todo.id)}
             >X</span>
             <hr/>
             
        </div>
        
    )
             
}
export default ToDo