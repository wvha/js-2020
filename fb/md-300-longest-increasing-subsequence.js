/**
 * @param {number[]} nums
 * @return {number}
 */

/*
in this problem, we want to keep track of the lowwest number and length of LIS
!!! agorithm should have n2 complexity.. so find the straightforward 
I'd just say keep track of LIS of each value in array 


keeping track of the max LIS at each number
we create a new array 

maxLength at dp[0] is 1
if maxVal at next number is greater than the previous, then we +1 to the maxLength
if not... keep it at the same 
*/
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    
    let dp = [];
    dp[0] = 1;
    let maxLength = 1;
    
    for (let i = 1; i < nums.length; i++) {
        let maxVal = 0;
        
        for (let j = 0; j < i; j++) { // j is the n-1
            if (nums[i] > nums[j]) {
                maxVal = Math.max(maxVal, dp[j])
            }
        }
        
        dp[i] = maxVal + 1;
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
    
};

