/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
we have two inputs
output is a boolean 

the string must be broken up perfectly
words can be reused 

BFS search
create set of words from wordDict
create set of lengths of words from wordDict

create new set of start indices.
looping through length of wordLengths -> 
*/

// var wordBreak = function(s, wordDict) {
//     const words = new Set(wordDict);
//     const wordLengths = new Set(wordDict.map(word => word.length))
    
//     const starts = new Set([0])
//     for (let start of starts) { // indices Set
//         for (let length of wordLengths) { // word lengths Set
//             // if word dictionary Set HAS a substring with a length from wordlengths
//             // ADD that index to the indices Set
//             if (words.has(s.slice(start, start + length))) { 
//                 starts.add(start + length)
//             }
//          }
//     }
//     // if indices set HAS s.length as an index... return true/false 
//     return starts.has(s.length)
// };




/*
const dp is just an empty array at first
for the two loops, if we have i = 1; j = 0; this is basically i-1
these are the indices 

we're looping thru i until we find an index that is a length of one of the words in wordDict
if dp[j] and wordDictSet has that word,
then set that dp[i] to true


*/
var wordBreak = function(s, wordDict) {
    const wordDictSet = new Set(wordDict);
    // const dp = [s.length + 1];
    const dp = []
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length] || false
}


