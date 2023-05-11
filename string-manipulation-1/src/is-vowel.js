/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  if (vowels.includes(char)) {
    return true;
  }
  return false;
}
