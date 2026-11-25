function shiftLetter(str, shift) {
  const charCode = str.charCodeAt(0);

  // const shiftedCode = charCode + shift;

  const baseCode = str >= "A" && str <= "Z" ? 65 : 97;

  const position = charCode - baseCode;

  const shiftedPosition = ((position + shift) % 26 + 26) % 26;

  const shiftedCode = shiftedPosition + baseCode;

  return String.fromCharCode(shiftedCode);
}


function caesarCipher(str, shift) {
  let encryptedText = "";

  for(const char of str){
    if(char >= "a" && char <= "z"){
      const shiftedLetter = shiftLetter(char, shift);
      encryptedText += shiftedLetter;
    }else if(char >= "A" && char <= "Z") {
      const shiftedLetter = shiftLetter(char, shift);
      encryptedText += shiftedLetter;
    }else{
      encryptedText += char;
    }
  }

  return encryptedText;
}

export default caesarCipher;