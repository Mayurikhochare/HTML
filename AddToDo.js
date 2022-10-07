import React, { useState } from "react";
 const AddToDo=({addToDo})=>{
    const [title,setTitle]=useState()
    const afterSubmit=(e)=>{
        e.preventDefault()
        
        const newTodo={id:Math.random(),title:title,done:false}
        console.log(newTodo)
        addToDo(newTodo)
        setTitle("")
    }
    return(
        <div style={{
            position:"fixed",
            bottom:10,
            display:"block",
            width:"100%"
        }}>
            <form onSubmit={afterSubmit}>
                <input type="text" value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter To-Do Actions" required style={{width:"90%",padding:10}}></input>
                <input type="submit" style={{width:80,padding:10}}></input>
                {/* <button>Active Tasks</button>
                <button>Completed Tasks</button>
                <button>All Tasks</button> */}
            </form>
        </div>
    )
 }
 export default AddToDo