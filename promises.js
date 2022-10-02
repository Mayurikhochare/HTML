newUser=(username)=>{
    return new Promise((resolve,reject)=>{
        console.log("Hi "+username)
        resolve()
    });
    
}
checkAge=()=>{
    return new Promise((resolve,reject)=>{
        let age=21
        if(age==18){
            console.log("Eligible")
            resolve()
        }
        else{
            reject("error occured here")
        }
        
    });

}
newUser("Mayuri").then(checkAge).catch((error) => {
    console.error(error);
  });