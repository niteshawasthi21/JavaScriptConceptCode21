//Finding two number indices that add up to the target number.

function indicesOfTargetnum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) { // start from i+1
      if (arr[i] + arr[j] === target) {
        return `The indices are [${i}, ${j}] and the numbers are [${arr[i]}, ${arr[j]}]`; // return indices and numbers if pair found
      }
    }
  }
  return "we can not find the number indices which form target number."; // return empty array if no pair found
}

console.log(indicesOfTargetnum([1, 2, 3, 5, 7, 8, 4], 4)); // "we can not find the number indices which form target number"