/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

/*
need a sum 
binary search tree
depth first tree 
if current node is not in range, keep moving
*/

/*
recursive implementation
faster version 

const rangeSumBST = (root, L, R) => {
    let sum = 0;
    const traverse = (root) => {
        if (root.val >= L && root.val <= R) sum += root.val;
        if (root.left !== null) traverse(root.left);
        if (root.right !== null) traverse(root.right);
    }
    traverse(root);
    return sum;
};

*/

// var rangeSumBST = function(root, L, R) {
//     let answer = 0;

//     const dfs = function(node) {
//         if (node !== null) {
//             if (node.val >= L && node.val <= R) {
//                 answer += node.val;
//             }
//             if (node.val > L) { // if value is bigger than left
//                 dfs(node.left, L , R);
//             }
//             if (node.val < R) {
//                 dfs(node.right, L, R);
//             }
//         }
//     }
    
//     dfs(root, L, R)
//     return answer;
// };



var rangeSumBST = function(root, L, R) {
    let answer = 0;
    let stack = [root];
    
    while (stack.length) {
        let node = stack.pop();
        
        if (node !== null) {
            if (node.val >= L && node.val <= R) {
                answer += node.val
            }
            if (node.val > L) {
                stack.push(node.left);
            }
            if (node.val < R) {
                stack.push(node.right);
            }
        }
    }
    
    return answer;
}

