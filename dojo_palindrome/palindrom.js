(() => {
  'use strict';

  // Fonction for
  const isPalindromFor = (mot) => {
    let tableau = [...mot];
    for ( let i = 0; i < tableau.length; i++) {
      if (tableau[i] !== tableau[tableau.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  //Fonction récursive
  const isPalindromRecursive = (mot) => {
    'use strict';
    return (mot.length <= 1) ? true : (mot.charAt(0) !== mot.charAt(mot.length - 1)) ?  false : isPalindromRecursive(mot.substr(1, mot.length - 2));
  }

  // Test
  const word1 = 'kayak';
  const isPalindromW1 = isPalindromRecursive(word1);
  console.log(`Est-ce que ${word1}est un palindrome? `, isPalindromW1);

  const word2 = 'alpha';
  const isPalindromW2 = isPalindromFor(word2);
  console.log(`Est-ce que ${word2}est un palindrome? `, isPalindromW2);
})();
