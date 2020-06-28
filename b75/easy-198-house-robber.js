var rob = function(nums) {
    // initiate first two values of dp array
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]
    
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    
    for (let i = 2; i < nums.length; i++) {
        // compare current max with the previous max
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length - 1];
}



// var rob = function(nums) {
//     let prevMax = 0;
//     let currentMax = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let temp = currentMax;
//         currentMax = Math.max(prevMax + nums[i], currentMax);
//         prevMax = temp;
//     }
    
//     return currentMax;
// }
