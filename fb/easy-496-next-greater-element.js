/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
inefficient solution 
iterate through nums1
  on each value, iterate through nums2, starting from next index, 
  once you find a greater number, return
  if no greater number, return -1

*/

/* using a monostack solution 




*/
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(x => {
        for (let i = nums2.indexOf(x) + 1; i < nums2.length; i++) {
            if (nums2[i] > x) return nums2[i]
            
        }
        return -1;
    })
};

