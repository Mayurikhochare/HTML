import Logout from "./logout"
import {useNavigate} from "react-router-dom"
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
const Dashboard=()=>{
    const Logout=()=>{
        const navigate=useNavigate()
        const logout=()=>{
            localStorage.clear()
            navigate("/login")
        }
            return(
                <button id="btn1" onClick={logout} >Log Out</button>)
        }
    return(
        <><Logout /><Routes>

                {/* <Route path="/" element={<Login />} />
                <Route path="/" element=> */}
            </Routes></>
    )
}
export default Dashboard