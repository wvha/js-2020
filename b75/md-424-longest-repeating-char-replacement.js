/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


/*
have a new array of numbers, or lengths of substrings of the same letter
then you iterate thru new array, use a window, replace according to k

*/

var characterReplacement = function(s, k) {
    let left = 0, max = 0, mostFreq = 0;
    
    const freqHash = {};
    
    for (let right = 0; right < s.length; right++) {
        
        // check for letter, update frequency for letter, update mostFrequent count
        freqHash[s[right]] = freqHash[s[right]] + 1 || 1; 
        mostFreq = Math.max(mostFreq, freqHash[s[right]]);
        
        // while window length - mostFrequent count is larger than k
        // reduce freqHash of s[left] by 1, move left window ++
        while (right - left + 1 - mostFreq > k) {
            freqHash[s[left]] -= 1;
            left++;
        }
        
        // update maximum 
        max = Math.max(max, right - left + 1);
    }
    return max;
}

