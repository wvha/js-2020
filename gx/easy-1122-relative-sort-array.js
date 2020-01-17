/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

/* 
hash map of arr 2
use (let val OF arr) to iterate
let val in arr represents current i
*/
var relativeSortArray = function(arr1, arr2) {
    let mapCount = {}
    let solution = []
    let endSolution = []
    
    for (let val of arr2) {
        mapCount[val] = 0
    }
    
    for (let val of arr1) {
        if (mapCount[val] >= 0) mapCount[val]++
        else endSolution.push(val)
    }
    
    for (let val of arr2) {
        for (let i = 0; i < mapCount[val]; i++) {
            solution.push(val)
        }
    }
    
    return [...solution, ...endSolution.sort((a, b) => a - b)]
};
