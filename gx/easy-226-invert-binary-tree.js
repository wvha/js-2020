
// recursive
var invertTree = function(root) {
    if (root === null) return null
    
    let right = invertTree(root.right)
    let left = invertTree(root.left)
    root.left = right
    root.right = left
    return root
};

// iterative
var invertTree = function(root) {
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        if (node !== null) {
            stack.push(node.left)
            stack.push(node.right)
            
            let temp = node.left
            node.left = node.right
            node.right = temp
        }
    }
    return root
}
