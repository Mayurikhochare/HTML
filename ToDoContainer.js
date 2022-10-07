import React, { useState } from "react"
import AddToDo from "./AddToDo"
import ToDo from "./ToDoComponent"

const todoList=[
    {id:1,title:'learn React',done:true},
    {id:2,title:'Create todo apllication',done:false}
    

]
const ToDoContainer=()=>{
    const [todos,setTodos]=useState(todoList)
    const handleToDo=(newTodo)=>{
        const newToDoList=[...todos,newTodo]
        //console.log(newToDoList)
        setTodos(newToDoList)

    }
    const removeToDo=(id)=>{
        const newToDoList=todos.filter(todo=>todo.id!==id)
        setTodos(newToDoList)
    }
    const handleCheckbox=(id)=>{
        const newToDoList=todos.map(todo=>{
            if(todo.id===id)
            return{...todo,done:!todo.done
            }
            return todo
        })
        setTodos(newToDoList                                                                                                                                                                                                                                            )
    }
    
    return(
        <div>
        {/* <button style={{padding:10, margin:"10px"}} onClick={()=>removeToDo(todo.id)}>Active Tasks</button>
        <button style={{padding:10, margin:"10px"}}>Completed Tasks</button>
        <input type="text" placeholder="Search Task" style={{width:"30%",padding:10}}></input>
        <input type="submit" style={{width:80,padding:10,margin:"10px"}}></input> */}
         {todos.length>0?todos.map((todo)=><ToDo todo={todo} remove={removeToDo} handleChange={handleCheckbox}/>):"No To-Do Left"}   
         <AddToDo addToDo={handleToDo}/>
            
        </div>
    )
}
export default ToDoContainer