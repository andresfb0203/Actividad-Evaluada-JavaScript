

/*****************SOLUCION**********************/
function countingSort(arr) {
    let frecuency = Array(100) .fill(0);
    arr.forEach(function(val){
       frecuency[val]++;  
    });
   return frecuency;
}
/**************************************************/


