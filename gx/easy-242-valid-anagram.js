/*
gotta use the hash table in order to have linear time complexity
space complexity is CONSTANT because table size stays the same no matter how large n is 
*/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    let table = {}
    for (let val of s) {
        table[val] ? table[val]++ : table[val] = 1
    }
    
    for (let val of t) {
        if (!table[val]) return false 
        table[val]--
        if (table[val] < 0) return false
    }
    
    return true
}