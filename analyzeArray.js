function analyzeArray(arr) {
  
  if(arr.length === 0) return 0;

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let arrLength = arr.length;
  let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
  let average = sum / arrLength;


  return {
    average,
    max,
    min,
    length: arrLength
  };

}

export default analyzeArray;