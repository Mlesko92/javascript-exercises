const removeFromArray = function(arr, ...valueToRemove) {
    return arr.filter(el => !valueToRemove.includes(el))
};

// Do not edit below this line
module.exports = removeFromArray;
