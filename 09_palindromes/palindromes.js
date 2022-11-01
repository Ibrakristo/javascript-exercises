const palindromes = function (x) {
    x = x.toLowerCase();
    x = x.replace(/[!,"'. ]/g,"");
 for(let i = 0 ; i<x.length ; i++){
    if(x[i] != x[x.length-1-i]) return false;
 }
 return true;
};
let y = "str sad";
// Do not edit below this line
module.exports = palindromes;
