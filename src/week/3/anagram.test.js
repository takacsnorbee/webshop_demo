import isAnagram from './anagram';

describe('Testing isAnagram method', () => {
  describe('Check positive cases', () => {
    it('if first word and second word are NULL ', () => {
      const posCase = { a: null, b: null };
      expect(isAnagram(posCase.a, posCase.b)).toBeTruthy();
    });

    it('if first word and second word are UNDEFINED ', () => {
      const posCase = { a: undefined, b: undefined };
      expect(isAnagram(posCase.a, posCase.b)).toBeTruthy();
    });

    it('if first word and second word are empty string ', () => {
      const posCase = { a: '', b: '' };
      expect(isAnagram(posCase.a, posCase.b)).toBeTruthy();
    });

    it('if first word and second word are "a" ', () => {
      const posCase = { a: 'a', b: 'a' };
      expect(isAnagram(posCase.a, posCase.b)).toBeTruthy();
    });

    it('if first word and second word are "bbbbbqqqeee" ', () => {
      const posCase = { a: null, b: null };
      expect(isAnagram(posCase.a, posCase.b)).toBeTruthy();
    });
  });

  describe('Check negative cases', () => {
    it('if first word is NULL and second word is "a" ', () => {
      const posCase = { a: null, b: 'a' };
      expect(isAnagram(posCase.a, posCase.b)).toBeFalsy();
    });

    it('if first word is "undefined" and second word is UNDEFINED ', () => {
      const posCase = { a: 'undefined', b: undefined };
      expect(isAnagram(posCase.a, posCase.b)).toBeFalsy();
    });

    it('if first word is empty string and second word is "asdas" ', () => {
      const posCase = { a: '', b: 'asdas' };
      expect(isAnagram(posCase.a, posCase.b)).toBeFalsy();
    });

    it('if first word is "bbbbbqqqee45" and second word is "bbbbbqqqeee" ', () => {
      const posCase = { a: 'bbbbbqqqee45', b: 'bbbbbqqqeee' };
      expect(isAnagram(posCase.a, posCase.b)).toBeFalsy();
    });
  });
});
