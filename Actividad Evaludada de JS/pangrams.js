

/******************SOLUCION*************************/
function pangrams(s) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let lowerCase = s.toLowerCase().split(" ").join("");
    for (let i = 0; i < alphabets.length; i++) {
        if (lowerCase.indexOf(alphabets[i]) == -1) {
            return "not pangram";
        }
    }
    return "pangram";
}
/**************************************************/

