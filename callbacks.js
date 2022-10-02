function returnName(firstname,lastname,callback){
    console.log(firstname+" "+lastname)
    callback()
}
function callme(){
    console.log("I am Callbeck function")
}
returnName("Mayuri", "Khochare",callme)