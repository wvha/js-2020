/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let word = ''
  for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i)
      if (code >= 65 && code < 97) {
          code += 32
      }
      word += String.fromCharCode(code)
  }
  return word
};