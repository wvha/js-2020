/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
we need an object to keep track of characters as we loop
if object[letter] does not exist, object[letter] = 1

as we're iterating through the string t, at the end if there's still something in the object
return false

if s and t are not same length, false


*/

var isAnagram = function(s, t) {
    const object = {};
    
    if (s.length !== t.length) return false;
    if (s === t) return true;
    
    // direction is either add or subtract, true or false
    function stringToObject(string, add) {
        for (let i = 0; i < string.length; i++) {
            
            if (add) {
                if (!object[string[i]]) object[string[i]] = 1;
                else if (object[string[i]]) object[string[i]]++;
            }
            
            if (!add) {
                if (!object[string[i]]) object[string[i]] = -1;
                else if (object[string[i]]) {
                  object[string[i]]--;
                }

                  if (object[string[i]] === 0)  {
                    delete object[string[i]];
                  }
            }
        }
    }
    
    stringToObject(s, true);
    stringToObject(t, false);
    return Object.keys(object).length === 0
};

