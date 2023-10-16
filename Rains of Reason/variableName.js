/**
 * 
 * @param {string} name 
 */
function solution(name) {
 return /^[a-z_][\w_]*$/i.test(name)
return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)
}

console.log(solution('1dol'));
