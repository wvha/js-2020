/*
sort a copy of array 
iterate: check value at each index and keep count of how many are out of place
*/

var heightChecker = function(heights) {
    let sorted = heights.slice(0)
    sorted = sorted.sort((a,b) => {return a - b})
    let count = 0
    
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sorted[i]) count++
    }
    return count
};