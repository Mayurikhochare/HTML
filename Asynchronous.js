add=(a,b)=>{
    console.log("Addition"+(a+b))
}
sub=(a,b)=>{
    setTimeout(()=>{console.log("substraction:"+(a-b));},1000);
}
add(5,8)
sub(9,4)