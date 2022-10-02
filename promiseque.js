function returnPromice(data){
    return new Promise(function(resolve,reject){
        if(typeof(data)!='number')
           reject("data is not a number")
        else if(data % 2 != 0){
            setTimeout(() => console.log("Odd"), 1000);
            resolve()
    }
        
        else if(data % 2 ==0)
            setTimeout(() => reject(new Error("Even")), 2000)
           
    })
}
returnPromice(2).catch((error)=>{
    console.error(error)
})
