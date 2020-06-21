/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
have an object
iterate through array, if combination of letters is not found in object
add the string to object
else, add the string to the object key already existing
(or maybe add the index instead)

at the end, retrieve the strings in the correct order as a new array

input - array of strings
output is an array 
*/

var groupAnagrams = function(strs) {
    let object = {};
    
    function isAnagramInObject(string) {
        return !!object[string];
    }
    
    for (let i = 0; i < strs.length; i++) {
        let sortedString = strs[i].split('').sort().join('');
        if (isAnagramInObject(sortedString)) {
            object[sortedString].push(strs[i])
        }
        else {
            object[sortedString] = [strs[i]];
        }
    }
    
    let objectKeys = Object.keys(object); // array 
    
    let array = objectKeys.map(a => {
        return object[a];
    })

  return array;
    
};

