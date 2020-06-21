/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

/*
input - 2 trees
output - boolean, if tree t is subtree of tree s
some gotchas - the subtree can't have additional children

The idea
Build a recursive function isSame that recursively checks whether two tree are the same
Use pre-order DFS, recursively checks whether t is a subtree of the current node
During DFS, if the two root nodes are the same, we use isSame to check whether they are the same tree

var isSubtree = function(s, t) {
    // given a node, returns whether they are the same
    var isSame = function(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val!=node2.val) return false;
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }

	// whether t is a subtree of the given node
    var dfs = function(node) {
        if (!node) return false;
        if (node.val==t.val && isSame(node, t)) {
            return true;
        }
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(s);
};
*/

var isSubtree = function(s, t) {
    var isSame = function(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }
    
    var dfs = function(node) {
        if (!node) return false;
        if (isSame(node, t)) return true;
        
        return dfs(node.left) || dfs(node.right)
    }
    return dfs(s)
}


