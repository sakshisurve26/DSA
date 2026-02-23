function findrepeatedNumber(n){
    let arr=[1,2,3,4,5,6,7,8,9,10,2,4,4,5,5,5,2];
    let count=0;
    for (let i=0;i<arr.length;i++){
        if(arr[i]==n){
            count++;
        }
    }
    console.log(n+" is repeated "+count+" times in array");
}
findrepeatedNumber(5);
findrepeatedNumber(2);

function transformarray(arr){
    
}

