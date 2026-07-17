function getPermutations(str) {

  if (typeof str !== 'string') {
    return [];
  }

  if (str.length <= 1) {
    return [str];
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    const subPerms = getPermutations(remainingChars);

    for (const perm of subPerms) {
      result.push(currentChar + perm);
    }
  }

  return result;
}

function getUniquePermutations(str) {
  const allPerms = getPermutations(str);
  return [...new Set(allPerms)];
}

console.log('Перестановки "abc":');
console.log(getPermutations('abc'));

console.log('\nПерестановки пустой строки:');
console.log(getPermutations(''));


console.log('\nПерестановки одного символа:');
console.log(getPermutations('a'));

console.log('\nУникальные перестановки строки с повторами "aab":');
console.log(getUniquePermutations('aab'));

console.log('\nПроверка количества перестановок для "abcd":');
const perms4 = getPermutations('abcd');
console.log(`Количество: ${perms4.length} (должно быть 4! = 24)`);
