const getPairs = (arr, k) => {
  let result = [];
  for (let outer = 0; outer < arr.length; outer++) {
    for (let inner = outer + 1; inner < arr.length; inner++) {
      if (arr[outer] + arr[inner] === k) {
        const pair = [arr[outer], arr[inner]];
        result.push(pair);
      }
    }
  }
  return result;
//   printPairs(result);
};

const printPairs = (result) => {
  result.forEach((value) => {
    console.log(value);
  });
};
getPairs();

const testPairMethod = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 10, 20];
  const k = 10;
  
  const result = getPairs(arr,k);
  console.assert(result.length,2);

  const arr02 = [-10, 2, 3, 4, 5, 6, 7, 10, 20];
  k = 10;

  const arr03 = [];
  k=15;

  
};

testPairMethod();