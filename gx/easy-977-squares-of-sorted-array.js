/**
 * @param {number[]} A
 * @return {number[]}
 
 easiest way is to square each and then sort
 */
var sortedSquares = function(A) {
    // return A.map(num => num*num).sort((a, b) => a - b)
    
    // two pointer solution
    let sorted = []
    let a = 0;
    let b = A.length - 1
    
    while (b >= a) {
        if (A[b]*A[b] > A[a]*A[a]) {
            sorted.unshift(A[b]*A[b])
            b--
        }
        else {
            sorted.unshift(A[a]*A[a])
            a++
        }
    }
    return sorted
};

