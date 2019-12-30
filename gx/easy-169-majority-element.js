/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
iteraete thru array 
have set to show how often each character appears

*/
var majorityElement = function(nums) {
    let point = (nums.length/2)
    let set = {}
    for (i in nums) {
        set[nums[i]] = set[nums[i]] || 0
        set[nums[i]]++
        if (set[nums[i]] > point) return nums[i]
    }
};
