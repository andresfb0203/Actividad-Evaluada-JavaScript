
/************SOLUCION***********************/
function lonelyinteger(a) {
    let lonely = 0;
    a.forEach(function (val) {
        (a.indexOf(val) == a.lastIndexOf(val)) ? lonely = val : null
    })
    return lonely;
}
/*********************************************/


