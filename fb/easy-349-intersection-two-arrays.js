/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
1. create a set from first array. use second array to check if the set contains each value and add to new array


are they sorted? yes
*/
var intersection = function(nums1, nums2) {
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => a - b)
    
//     const intersection = []
//     let l = 0, r = 0;
//     while (nums2[l] && nums1[r] !== undefined) {
//         let left = nums1[r], right = nums2[l];
//         if (right === left) {
//             intersection.push(right);
//             while (left === nums1[r]) r++;
//             while (right === nums2[l]) l++;
//             continue;
//         }
//         if (right > left) while (left === nums1[r]) r++;
        
//         else while (right === nums2[l]) l++;
//     }
//     return intersection
    
    let output = new Set();
    let result = [];
    let obj = {};
    
    for (let num of nums1) {
        if (!obj[num]) obj[num] = 1;
    }
    
    for (let num of nums2) {
        if (obj[num] && obj[num] > 0) result.push(num)
        obj[num]--
    }
    return result
};

// var intersection = function(nums1, nums2) {
//     let output = new Set();
//     let result = [];
//     let hash = new Map();
//     for(let num of nums1){
//       if(!hash.has(num)){
//           hash.set(num,1);
//       }else{
//           hash.set(num,hash.get(num)+1);
//       }
        
//     }
    
//     for(let num of nums2){
        
//         if(hash.has(num)){
//             output.add(num)
//         }
//     }
    
//     for(let num of output){
        
//         result.push(num);
//     }
    
    
//     return result;
        
   
// };

