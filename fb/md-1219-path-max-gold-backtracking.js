/**
 * @param {number[][]} grid
 * @return {number}
 */

/*

have a main function and finder

function maxGold
starting from one corner you want to do recurisve to see whats the next best option 



*/
var getMaximumGold = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 0) {
                count = Math.max(count, maxGold(grid, i, j));
            }
        }
    }
    return count;
};

function maxGold(grid, row = 0, col = 0, count = 0) {
    // if position is out of range
    if (row >= grid.length || col >= grid[0].length || row < 0 || col < 0) return 0;
    
    else if (grid[row][col] !== 0) {
        count += grid[row][col];
        let temp = grid[row][col];
        grid[row][col] = 0;
        
        let left = maxGold(grid, row - 1, col, count);
        let right = maxGold(grid, row + 1, col, count);
        let up = maxGold(grid, row, col - 1, count);
        let down = maxGold(grid, row, col + 1, count);
        
        grid[row][col] = temp;
        return Math.max(left, right, up, down);
    }
    return count;
}

