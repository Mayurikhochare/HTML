function arrayFunction(arr1,arr2){
    const merge=arr1.concat(arr2)
    let mySet=new Set(merge)

    let myarr=[]
    for (const i of mySet) {
        myarr.push(i)
    }
    
    myarr.sort()
    console.log(myarr)


}

arr1=[5,8,9]
arr2=[2,5,6]
arrayFunction(arr1,arr2)