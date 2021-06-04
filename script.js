const array = [1, 45, 16, -22, 36, 4, 100, 0, 67, 22, 1, -1, 15];

function sortArray(array) {
  const newArray = [].concat(array);
  const sortedArray = [];
  let num;
  let index;
  while (newArray.length) {
    num = newArray[0];
    index = 0;
    newArray.forEach((value, i) => {
      if (value < num) {
        num = value;
        index = i;
      }
    })
    sortedArray.push(Number(newArray.splice(index, 1)));
  }
  return sortedArray;
}

function returnXLargestNum(array, x) {
  let sortedArray = sortArray(array);
  if (x > sortedArray.length) {
    return sortedArray[0];
  }
  return sortedArray[sortedArray.length - x];
}