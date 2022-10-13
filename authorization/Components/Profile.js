
import {useNavigate} from "react-router-dom"

const Profile=()=>{
    const navigate=useNavigate()

    const logout=()=>{
        localStorage.clear()
        navigate("/login")
    }
    return(
        <button onClick={logout}>Log Out</button>
    )
}
export default Profile