/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
input - binary tree
output - find the max path sum

use a recursive function to find MAX GAIN 

initiate max_sum as smallest possible integer and call maxGain(node = root)
maxGain(node) should have check to continue old path or start new one 

- base case: if node = null, max gain = 0
- call maxGain recursively on node children
- leftGain = max(maxGain(node.left), 0)
- rightGain = max(maxGain(node.right), 0)
- check node.val + leftGain + rightGain. update maxSum if better
- for recursion, return maxGain 
*/

var maxPathSum = function(root) {
    let sum = root.val;
    const dfs = (node) => {
        if (!node) return 0;
        const left = Math.max(dfs(node.left), 0),
              right = Math.max(dfs(node.right), 0);
        sum = Math.max(left + right + node.val, sum);
        return Math.max(left, right) + node.val;
    }
    dfs(root);
    return sum;
};


// var maxPathSum = function(root) {
//     let maxSum = -Infinity;
    
//     const maxGain = function(node) {
//         if (node === null) return 0;
        
//         // max sum on left and right subtrees
//         const leftGain = Math.max(maxGain(node.left), 0);
//         const rightGain = Math.max(maxGain(node.right), 0);
        
//         // check price to start a new path where node is the highest
//         // is it worth switching? 
//         const newPath = node.val + leftGain + rightGain;
        
//         // update max sum if its better to switch
//         maxSum = Math.max(maxSum, newPath);
        
//         // recursion step
//         return node.val + Math.max(leftGain, rightGain);

//     }
    
//     maxGain(root);
//     return maxSum;
// };

