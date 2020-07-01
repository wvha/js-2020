/**
 * @param {number[]} nums
 * @return {number}
 */


/*
similar case but with more restrictions
first and last house cannot be robbed 
so check for case where first house was used, then last house cannot be used
last house used, first house is not used



*/
var helper = function(nums) {
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        // prev max + nums[i] or current max
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i-1]);
    }

    return dp[nums.length - 1];
};

var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(...nums);
    
    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)));
}


