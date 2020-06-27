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
 * @return {number[]}
 */

/*
input is a binary tree
output is an array


just add the nodes on the right side ??? 
to an array

while node.right || node.left
    if node.right, push to array
    if only node.left, 


ooooh ..exception. 
we still need to account for values in the left subtree if there's no other in the same ... 

*/

// var rightSideView = function(root) {
//     if (!root) return [];
    
//     let current = root;
//     let array = [current.val];
    
//     while (current.right || current.left) {
//         if (current.right) {
//             array.push(current.right.val);
//             current = current.right;
//         }
//         if (!current.right && current.left) {
//             array.push(current.left.val);
//             current = current.left;
//         }
//     }
    
//     return array;
// };




/*
navigate through tree
BFS
iterate ...

have a queue 
this is similar to question where you separate each row and just pick the last item of each row

[
    [1]
    [2, 3]
    [5, 4]
]

[
    [1]
    [2, 3]
    [5]
]

FIFO
BFS.

*/


var rightSideView = function(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    // let result = [];
        
    while (queue.length) {
        let levelLength = queue.length;
            
        for (let i = 0; i < levelLength; i++) {
            node = queue.shift();
                
            // right most element
            if (i === levelLength - 1) {
                result.push(node.val);
            }
                
            // add to queue
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    } 
    return result;
}

// recursive 
var rightSideView = function(root) {
    const result = [];
    
    let traverse = function(node, level) {
        if (!node) return;
        result[level] = node.val;
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    traverse(root, 0);
    return result;
}


