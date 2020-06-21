/**
 * @param {string} s
 * @return {number}
 */

/*
longest substring 
let longest = ''
youd want to keep track of longest substring at each index

input is string
output is number, length of longest substring

SLIDING WINDOW
have left and right
maxLength and set to keep track of character repeats

iterate through s, add to set for each character the right window comes across
if a character has been repeated, (set[s[right]] > 1), move the left window until that character is only repeated once
check for maxLength at the end of each iteration, between maxLength and length of characters between right & left

*/

var lengthOfLongestSubstring = function(s) {
    const set = {};
    let maxLength = 0;
    let left = 0;
    let right = 0;
    
    // iterate through each 
    for (let right = 0; right < s.length; right++) {
        if (!set[s[right]]) set[s[right]] = 0;
        
        set[s[right]]++;
        
        
        // if character has been repeated, move left window until there's only 1 character
        while (set[s[right]] > 1) {
            set[s[left]]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

