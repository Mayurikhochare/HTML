function keyValueEx(obj,petName,value){
    obj[petName]=value
    return obj
    

}

console.log(keyValueEx({piano:500},"Brutus",300))