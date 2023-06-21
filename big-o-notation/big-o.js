/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // _ * _ = O(?) --> 1 * 1 = O(1)
  const unique = []; // _ * _ = O(?) --> 1 * 1 = O(1)
  for (
    let i = 0; // _ * _ = O(?) --> 1 * 1 = O(1)
    i < words.length; // _ * _ = O(?) --> 2 * n = O(n)
    i++ // _ * _ = O(?) --> 2 * n = O(n)
  ) {
    const word = words[i]; // _ * _ = O(?) --> 2 * 1 = O(1)
    if (!seen[word]) {
      // _ * _ = O(?) --> 2 * 1 = O(1)
      seen[word] = true; // _ * _ = O(?) --> 2 * 1 = O(1)
      unique[unique.length] = word; // _ * _ = O(?) --> 3 * 1 = O(1)
    }
  }
  return unique; // _ * _ = O(?) --> 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(?) --> O(n)

function uniqueQuadratic(words) {
  const unique = []; // _ * _ = O(?) --> 1 * 1 = O(1)
  for (
    let i = 0; // _ * _ = O(?) --> 1 * 1 = O(1)
    i < words.length; // _ * _ = O(?) --> 2 * n = O(n)
    i++ // _ * _ = O(?) --> 2 * n = O(n)
  ) {
    const word = words[i]; // _ * _ = O(?) --> 2 * 1 = O(1)
    let isUnique = true; // _ * _ = O(?) --> 1 * 1 = O(1)
    for (
      let c = 0; // _ * _ = O(?) --> 1 * n = O(n)
      c < i; // _ * _ = O(?) --> 1 * n * n = O(n^2)
      c++ // _ * _ = O(?) --> 2 * n * n = O(n^2)
    ) {
      const comparing = words[c]; // _ * _ = O(?) --> 2 * 1 = O(1)
      if (comparing === word) {
        // _ * _ = O(?) --> 1 * 1 = O(1)
        isUnique = false; // _ * _ = O(?) --> 1 * 1 = O(1)
      }
    }
    if (isUnique) {
      // _ * _ = O(?) --> 1 * 1 = O(1)
      unique[unique.length] = word; // _ * _ = O(?) --> 3 * 1 * n = O(n)
    }
  }
  return unique; // _ * _ = O(?) --> 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(?) --> O(n^2)
