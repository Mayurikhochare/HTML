function setConversion(mySet){
    let myarr=[]
    for (const i of mySet) {
        myarr.push(i)
    }
    console.log(myarr)

}
let mySet=new Set()
mySet.add(1)
mySet.add("hi")
mySet.add(8)
mySet.add(9)
setConversion(mySet)
