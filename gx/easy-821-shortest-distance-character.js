/* 
initialize an array 
Loop through the string
find the closest character C with a helper function 

at each letter, calculate and return the distance of the closest C 
push that value distance to the array 
*/
var shortestToChar = function(S, C) {
    let arr = []
    for (let i = 0; i < S.length; i++) {
        // should return i of the closest character
        let closest = findClosest(i, S, C); 
        
        // add to array 
        arr.push(closest)
    }
    return arr
};

var findClosest = function(i, S, C) {
    if (S[i] === C) return 0
    
    let j = 1
    while (i >= 0 || i <= S.length) {
        if (S[i + j] === C || S[i - j] === C) {
            return j;
        }
        j++;
    }
}
