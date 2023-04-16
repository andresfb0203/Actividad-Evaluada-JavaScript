

/*************SOLUCION*******************/
function diagonalDifference(arr) {
    let sumP=0;
    let sumS=0;
for(let i=0; i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
       if(i==j){
         sumP= sumP+arr[i][j];  
       }
       if(i+j==(arr.length-1)){
         sumS= sumS+arr[i][j];   
       }
    }  
}
return (Math.abs(sumP-sumS));
}
/**************************************************/

