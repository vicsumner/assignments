isPalindrome = (string) => {
  let strLen = Math.floor(string.length);
  string = string.toLocaleLowerCase();

  for (let i = 0; i < strLen; i++) {
    if (string[i] !== string[strLen - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("star rats"))