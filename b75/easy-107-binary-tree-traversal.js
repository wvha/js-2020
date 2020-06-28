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
 * @return {number[][]}
 */


/*
for this problem, left to right, bottom to top
we're given a tree input

output: array of arrays

recursively traverse



*/
var levelOrderBottom = function(root) {
    let array = [];
    
    let traverse = function(node, level) {
        if (!node) return null;
        
        if (array[level]) array[level].push(node.val);
        else array[level] = [node.val]
        
        traverse(node.left, level + 1) 
        traverse(node.right, level + 1);
    }
    
    traverse(root, 0);
    return array.reverse();
};

