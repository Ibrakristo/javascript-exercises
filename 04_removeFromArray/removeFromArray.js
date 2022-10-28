const removeFromArray = function(arr) {
    let remove;
    for(let i = 0;i<arr.length;i++){
        remove = false;
        for(let j = 1;j<arguments.length;j++){
            if(arguments[j] === arr[i]){
                remove = true;
            }
        }
        if(remove === true){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
