import { Line } from "react-chartjs-2"
import Sales from "./Sales"

function SalesStatistics(){
    const data={
        labels:['jan','Feb','Mar','Apr','May'],
        datasets:[
            {
            label:'Sales for 2020 (M)',
            data:[3,2,2,1,5]
            }

        ]
    }
    return (
        <Sales/>
    )
        
    
}
export default SalesStatistics