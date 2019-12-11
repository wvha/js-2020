/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A, min = 0, max = A.length - 1) {
    
    // this solution takes linear time
    // for(let i = 1; i < A.length - 1; i++) {
    //     if (A[i] > A[i-1] && A[i] > A[i+1]) return i
    // }
    
    // to make it faster (log n)
    // add initial points
    let i = Math.floor((min + max)/2)
    if (A[i] > A[i-1] && A[i] > A[i+1]) return i
    
    if (A[i] < A[i-1]) return peakIndexInMountainArray(A, min, max = i)
    
    if (A[i] < A[i+1]) return peakIndexInMountainArray(A, min = i, max)
    
};
