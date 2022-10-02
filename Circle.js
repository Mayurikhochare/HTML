class Circle{
    
    constructor(rad){
        
        this.rad=rad
    }
        getArea(rad){
                
                let area=(Math.PI*rad*rad)
                console.log(area)
                
        }
        
        getPerimeter(rad){
        let area1=2*Math.PI*rad
        console.log(area1)
        }

    
    }

let circle=new Circle(2)
circle.getArea()
circle.getPerimeter()
    