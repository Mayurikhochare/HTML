import { useContext } from "react"
import { HelloContext } from "./Hooks"

const HelloComponent=()=>{
    const Hello=useContext(HelloContext)
    console.log(Hello)
    return(
        <h1>
            Hello from HelloComponent which is child of main component
        </h1>
    )

}
export default HelloComponent;