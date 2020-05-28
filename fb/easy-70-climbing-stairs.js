/**
 * @param {number} n
 * @return {number}
 */


/*
distinct ways
either .. count how many at each step? 

fibonacci sequence way
BECAUSE. you're using the previous two solutions to get the next answer


*/
// var climbStairs = function(n) {
//     if (n === 1) return 1;
    
//     let first = 1;
//     let second = 2;
    
//     for (let i = 3; i <= n; i++) {
//         let third = first + second;
//         first = second;
//         second = third;
//     }
    
//     return second;
// };

/*
dynamic programming because you're using the previous answers to solve 
*/
var climbStairs = function(n) {
    if (n === 1) return 1;
    
    let dp = [n+1];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n]
}

