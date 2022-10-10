import { useEffect, useState } from "react"
import MainComponent from "./MainComponent";
import React,{createContext} from "react";

// const Hooks=()=>{
//     const[counter,setCounter]=useState(0);
//     function increaseCounter(){
//         setCounter(counter+1)
//     }
//     function decreaseCounter(){
//         setCounter(counter-1)
//     }
//     return(
//         <div>
//             <h1>Counter:{counter}</h1>
//             <button onClick={increaseCounter}>Increased</button>
//             <button onClick={decreaseCounter}>Decreased</button>
//         </div>
//     )
// }



// const Hooks=()=>{
//     const[counter,setCounter]=useState(0);
//     const[name,setName]=useState("")
//     function increaseCounter(){
//         setCounter(counter+1)
//     }
//     function decreaseCounter(){
//         setCounter(counter-1)
//     }
//     return(
//         <div>
//             <input type="text" onChange={e=>setName(e.target.value)}></input>
//             <h1>{name} has clicked{counter} times!</h1>
//             <button onClick={increaseCounter}>Increased</button>
//             <button onClick={decreaseCounter}>Decreased</button>
//         </div>
//     )
// }




//useState with Objects
// const Hooks=()=>{
// const[details,setDetails]=useState({counter:0,name:""})
// function increaseCounter(){
//     setDetails((prev)=>({
//         ...prev,
//         counter:prev.counter+1
//     }))
// }
// function decreaseCounter(){
//     setDetails((prev)=>({
//         ...prev,
//         counter:prev.counter-1
//     }))
// }
// return(
//     <div>
//         <h1>Counter:{details.counter}</h1>
//         <h1>Clicked {details.counter} times</h1>
//         <button onClick={increaseCounter}>Increased</button>
//         <button onClick={decreaseCounter}>Decreased</button>
//     </div>
// )
// }

//useEffect without dependancies

// const Hooks=()=>{
//     const[counter,setCounter]=useState(0)
//     useEffect(()=>{
//         document.title=counter+" times clicked!"
//     })
//     function increaseCounter(){
//         setCounter(counter+1)
//     }
//     function decreaseCounter(){
//         setCounter(counter-1)
//     }
//     return(
//         <div>
//             <h1>Counter:{counter}</h1>
//             <button onClick={increaseCounter}>Increased</button>
//             <button onClick={decreaseCounter}>Decreased</button>
//         </div>
//     )
// }
        
//useEffect with an empty array

// const Hooks=()=>{
//     const[counter,setCounter]=useState(0)
//     useEffect(()=>{
//         document.title=counter+" times clicked!"
//     },[])
//     function increaseCounter(){
//         setCounter(counter+1)
//     }
//     function decreaseCounter(){
//         setCounter(counter-1)
//     }
//     return(
//         <div>
//             <h1>Counter:{counter}</h1>
//             <button onClick={increaseCounter}>Increased</button>
//             <button onClick={decreaseCounter}>Decreased</button>
//         </div>
//     )
// }





//useEffect with Variables
// const Hooks=()=>{
//     const[counter,setCounter]=useState(0)
//     const[countByTen,setCountByTen]=useState(10)
//     useEffect(()=>{
//         document.title=countByTen +"times clicked"
//     },[countByTen])

//     function increaseCounter()
//     {
//         setCounter(counter+1)
//     }
//     function decreaseCounter(){
//         setCounter(counter-1)
//     }
//     return(
//         <div>
//             <h1>Counter:{counter}</h1>
//             <button onClick={increaseCounter}>Increased</button>
//             <button onClick={decreaseCounter}>Increased</button>
//             <h1>Count Increased by 10 :{countByTen}</h1>
//             <button onClick={()=>setCountByTen(countByTen+10)}>count Increased by 10</button>
//         </div>
//     )

// }


//useContext
export const HelloContext=createContext();

const Hooks=()=>{
    return(
        <><HelloContext.Provider value={"Hello"} />
        <MainComponent />
        </>
    );
}
export default Hooks;