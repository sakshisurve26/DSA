function sumdiagonal(matrix){
    let sum1=0,sum2=0;
    for(let i=0;i<matrix.length;i++){
        sum1+=matrix[i][i];
        sum2+=matrix[i][matrix.length-1-i];
    }
    console.log("Sum of primary diagonal: "+sum1);
    console.log("Sum of secondary diagonal: "+sum2);
}
let matrix=[
[1,2,3],
[4,5,6],
[10,11,13]
];
sumdiagonal(matrix);