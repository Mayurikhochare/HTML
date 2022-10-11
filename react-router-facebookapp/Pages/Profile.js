import { useNavigate, useParams } from "react-router-dom"
import React from "react"
const Profile=()=>{
    let nevigate=useNavigate()
    let {username,sirname}=useParams()
    return(
        <div>
            <h1>This is a Profile Page for {username} {sirname}</h1>
            <button onClick={()=>{nevigate("/")}}>Go back To Home</button>
        </div>
    )
    
}
export default Profile