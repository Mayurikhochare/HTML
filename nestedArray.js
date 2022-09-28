function nested(arr1,arr2){
    let min=arr1[0],max=arr1[0],min1=arr2[0],max1=arr2[0]
    for (let i = 1; i < arr1.length; i++) {
        if(arr1[i]<min){
            min=arr1[i];

        }
        if(arr1[i]>max){
            max=arr1[i];
        }     
    }
    for (let i = 1; i < arr2.length; i++) {
        if(arr2[i]<min){
            min1=arr1[i];

        }
        if(arr1[i]>max){
            max1=arr1[i];
        }     
    }
    if(min>min1 && max<max1){
        return true
    }
    else{
        return false
    }
}
arr1=[4,5,9,6]
arr2=[1,3,7,8]

console.log(nested(arr1,arr2))