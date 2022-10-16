import { useEffect } from "react" 
import {useNavigate} from "react-router-dom"


 export const Login=()=>{
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
    navigate("/Products")    

    }
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login==="true"){
            navigate("/Products")
        }
    },[])
    return(
        <div id="container" align="center" >
            <h1>Login</h1>
            
            <label>Username:
            <input type="text"></input>
            </label><br/><br/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"></input><br/><br/>
            <button onClick={login}>Login</button>
        </div>
    )
 }
 export default Login