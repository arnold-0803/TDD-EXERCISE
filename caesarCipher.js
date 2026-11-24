function shiftLetter(str, shift) {
  const charCode = str.charCodeAt(0);

  // const shiftedCode = charCode + shift;

  const position = charCode - 97;

  const shiftedPosition = (position + shift) % 26;

  const shiftedCode = shiftedPosition + 97;

  return String.fromCharCode(shiftedCode);
}


function caesarCipher(str, shift) {
  let encryptedText = "";

  for(const char of str){
    const shiftedLetter = shiftLetter(char, shift);
    encryptedText += shiftedLetter;
  }

  return encryptedText;
}

export default caesarCipher;