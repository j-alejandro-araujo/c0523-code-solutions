/* exported isPalindromic */
function isPalindromic(string) {
  const aString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < aString.length / 2; i++) {
    if (aString[i] !== aString[aString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
