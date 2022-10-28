const reverseString = function(str) {
let temp ="";
for(let i = str.length-1; i>=0;i--)
    temp += str.charAt(i);
return temp;
};
// Do not edit below this line
module.exports = reverseString;
