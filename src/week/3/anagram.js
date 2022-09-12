/* eslint-disable functional/immutable-data */
//2. Task
// 2 words are anagrams if
// - they have exactly the same chars
// - their number also the same per word
const wordOne = '2aaderabb';
const wordTwo = 'badaerab2';

const isAnagram = (word1, word2) => {
  const sortedWord1 = word1 ? [...word1.split('')].sort().join('') : '';
  const sortedWord2 = word2 ? [...word2.split('')].sort().join('') : '';
  return sortedWord1 === sortedWord2;
};

console.log(isAnagram(wordOne, wordTwo)); // True
/*
// More Tests
console.log('------------------ Tests: ----------------');
console.log(isAnagram(null, null)); // True
console.log(isAnagram(undefined, undefined)); // True
console.log(isAnagram('', '')); // True
console.log(isAnagram('a', 'a')); // True
console.log(isAnagram('bbbb', 'bbbb')); // True
console.log(isAnagram('bbbbbqqqeee', 'bbbbbqqqeee')); // True
console.log(isAnagram('bbbbbqqqeee', 'eqbbbqqeebb')); // True

console.log(isAnagram('abba', 'bab')); // False
console.log(isAnagram('abba', 'babc')); // False
console.log(isAnagram('babc', 'abba')); // False
console.log(isAnagram('babc', 'tbba')); // False
console.log(isAnagram('abba', 'zeze')); // False
console.log(isAnagram('u', 'a')); // False
console.log(isAnagram('a', 'aa')); // False*/

export default isAnagram;
