/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */


/*
input: words array, order string
check if eaach word is sorted correctly 
output: boolean

we need to check the order quickly 
iterate through order and make the dictionary with the order number

then you iterate thru words array 
compare the word with the one before 
if the first letter is not the same, compare and move to the next

if letter is the same, move to 2nd letter ...
if first word ends first, then its correct


*/

var isAlienSorted = function(words, order) {
    const numberOrder = {}
    for (let i = 0; i < order.length; i++) {
        numberOrder[order[i]] = i;
    }
    
    // words array
    if (words.length <= 1) return true;
    
    for (let i = 1; i < words.length; i++) {
        // check order
        // first word first
        for (let j = 0; j < words[i-1].length; j++) {
            let prevWord = words[i-1][j];
            let currWord = words[i][j]
            
            // word A is longer 
            if (prevWord && !currWord) return false;
            
            // word A >
            if (numberOrder[prevWord] > numberOrder[currWord]) return false;
            
            // word A < 
            if (numberOrder[prevWord] < numberOrder[currWord]) break;
            
        }
    }
    return true;
};

