/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const ns = s.trim();
  const nsArr = ns.split(' ');
  if (nsArr.length > 0) {
    return nsArr[nsArr.length - 1].length;
  }
  return 0;
};

const s = 'hello world';

console.log(lengthOfLastWord(s));
