module.exports = function check(str, bracketsConfig) {
  const openBrackets = [ '(', '[', '{' ];
  const closeBrackets = [ ')', ']', '}' ];

  const strArr = str.split('');
  if (strArr.length % 2 !== 0 || closeBrackets.includes(strArr[0]) || openBrackets.includes(strArr[strArr.length - 1])) {
      return false;
  } else {
      return true;
  }
}
