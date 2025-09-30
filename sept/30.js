function isValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); 
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0) {
        return false; 
      }
      
      const lastOpen = stack.pop();
      if (lastOpen !== map[char]) {
        return false; 
      }
    }
  }

  return stack.length === 0;
}
console.log(isValidParentheses("()[]{}")); 
console.log(isValidParentheses("([{}])")); 
console.log(isValidParentheses("(]"));     
console.log(isValidParentheses("((("));    
