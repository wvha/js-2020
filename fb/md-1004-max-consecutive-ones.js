/* first attempt */ 

/*
iterate,
initialize count 
at each value 

*/
/*
var longestOnes = function(A, K) {

    let count = 0
    let flipped = 0
    
    let arr = []
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            if (flipped < K) {
                count++
                flipped++
                arr.push(count)
            } else {
                count = 0
                flipped = 0
                arr.push(0)
            }
        }
        
        if (A[i] === 1) {
            count++
            arr.push(count)
        }
    }

    if (K - flipped !== 0) return Math.max(...arr) + K - flipped
    else return Math.max(...arr)
};
*/



var longestOnes = function(A, K) {
    let result = 0

    let i = 0
    let run = 0
    let k = K

    while (i < A.length) {
        if (A[i] === 1) {
            result = Math.max(result, run - i + 1)
            run++
        }
        else if (k > 0) {
            result = Math.max(result, run - i + 1)
            k--
            j++
        }
        else {
            if (A[i++] === 0) k++
        }
    }
    return result
}