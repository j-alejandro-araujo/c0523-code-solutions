/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const cFirstString = firstString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cSecondString = secondString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const sFirstString = cFirstString.split('').sort().join('');
  const sSecondString = cSecondString.split('').sort().join('');

  return sFirstString === sSecondString;
}
