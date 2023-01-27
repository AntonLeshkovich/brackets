module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '[', '{', '1', '3', '5'];
  const otherBrackets = ['|', '7', '8'];
  const pairBrackets = {
      [')']: '(',
      [']']: '[',
      ['}']: '{',
      ['2']: '1',
      ['4']: '3',
      ['6']: '5',
  };

  let stack = [];
  
  for (let i = 0; i < str.length; i++) {

      let currentSymbol = str[i];

      if(openBrackets.includes(currentSymbol)) {
          stack.push(currentSymbol);
      } else if (stack.includes(currentSymbol) && otherBrackets.includes(currentSymbol)) {
          stack.pop(currentSymbol);
      } else if (otherBrackets.includes(currentSymbol)) {
          stack.push(currentSymbol);
      } else if (stack.length === 0) {
          return false;
      }

      let topStackEl = stack[stack.length - 1];

      if (pairBrackets[currentSymbol] === topStackEl) {
          stack.pop();
      }
      console.log(stack);
  }
  if (stack.length === 0) {
      return true;
  } else {
      return false;
  }
}
