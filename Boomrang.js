function findBoomrang(arr){
    let arr1=[]
    let arr2=[]
    let count=0
    for (let i = 0; i < arr.length; i++) {
              
           if(arr[i]==arr[i+2] && arr[i]!=arr[i+1]){
            arr1.push(i)
            arr1.push(i+1)
            arr1.push(i+2)

            arr2.push(arr1)
            arr1=[]
           }
    }
    console.log(arr2.length)
}



arr=[4, 4, 4, 9, 9, 9, 9]
findBoomrang(arr)