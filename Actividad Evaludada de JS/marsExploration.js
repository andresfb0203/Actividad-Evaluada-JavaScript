

/*************SOLUCION******************************/
function marsExploration(s) {
  let countSOS = s.length/3;
  let msj = "SOS".repeat(countSOS);
  let count = 0;
  for(let i=0; i<s.length;i++){
      if( s[i] != msj[i]){
           count++;
      }
  }
return count;
}
/**************************************************/

