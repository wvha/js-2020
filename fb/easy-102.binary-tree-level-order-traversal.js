/*
traverse the binary tree, keep track of the nodes values and level
and push to a new array

*/
var levelOrder = function(root) {
    const result = [];
    
    function traverse(node, level) {
        if (!node) return;
        
        if (!result[level]) result[level] = [node.val];
        else result[level].push(node.val);
        
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    
    traverse(root, 0);
    return result;
};

