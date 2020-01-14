/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// recursive solution
// var maxDepth = function(root) {
//     if (root === null) return 0
    
//     let leftHeight = maxDepth(root.left)
//     let rightHeight = maxDepth(root.right)
//     return Math.max(leftHeight, rightHeight) + 1
// };

// iterative with a queue
var maxDepth = function(root) {
    if (!root) return 0
    
    let queue = [root]
    let depth = 0
    
    while (queue.length) {
        depth++
        let len = queue.length
        
        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left)
            if (queue[i].right) queue.push(queue[i].right)
        }
        // splice because those children have already been added
        queue.splice(0, len)
    }
    
    return depth
}