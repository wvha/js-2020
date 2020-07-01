/**
 * @param {number[]} prices
 * @return {number}
 */


/*
input is an array
output is the max profit you can get, default is 0

must buy before selling
keep track of
- min price
- maybe the prevMin price

max profit

3, 5, 1, 2
as we iterate through array
we'll have a new array that tracks the current best profit

3, 6, 1, 2, 4
min price 3
profit - [0, 3, ]

new min 1
[0, 3, 3, 3, 3]




*/

var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    let min = prices[0];
    let max = 0;
    
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - min;
        max = Math.max(profit, max);
        
        // if there's a new min
        min = Math.min(min, prices[i]);
        
        
    }
    return max;
};

