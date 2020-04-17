/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

/*
iterate through the first array 
at the current value, if arr2 or arr3 current value is >, keep the same
if both = value , add to new array 
if < than arr1, add one to the count

return array
*/

var arraysIntersection = function(arr1, arr2, arr3) {
    let arr = [];
    
    let i = 0, j = 0, k = 0, currentMax;
    
    while ( i < arr1.length && j < arr2.length && k < arr3.length) {
        currentMax = Math.max(arr1[i], arr2[j], arr3[k]);
        if (arr1[i] === currentMax && arr2[j] === currentMax && arr3[k] === currentMax) {
            arr.push(arr1[i]);
            i++;
            j++;
            k++;
        }
        
        else if (arr1[i] === currentMax) {
            if (arr2[j] < currentMax) j++;
            if (arr3[k] < currentMax) k++;
        } else if (arr2[j] === currentMax) {
            if (arr1[i] < currentMax) i++;
            if (arr3[k] < currentMax) k++;
        } else {
            if (arr[i] < currentMax) i++;
            if (arr2[j] < currentMax) j++;
        }
        
    }
    return arr;
};



// one liner
// var arraysIntersection = function(arr1, arr2, arr3) {
//     return arr1.filter(num => arr2.includes(num) && arr3.includes(num))
// }

