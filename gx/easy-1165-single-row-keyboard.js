/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

/* use indexof and Math.abs */

var calculateTime = function(keyboard, word) {
    
  let sum = 0;
  let previous = 0;
  
  for (let i of word) {
      let current = keyboard.indexOf(i)
      sum += Math.abs(previous - current)
      previous = current
  }
  return sum
};