add=(a,b)=>{
    setTimeout(()=>{console.log("Addition "+(a+b));},1000);
}
sub=(a,b)=>{
    setTimeout(()=>{console.log("substraction : "+(a-b));},1000);
}
async function menu(){
    await sub(10,9);
    await add(3,7);
}
menu()