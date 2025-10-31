// Function to find the maximum sum of a contiguous subarray with subarray./
//Kadane's Algorithm implementation
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i;
        } else {
            currentSum += nums[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    const subArray = nums.slice(start, end + 1);
    return `Sub array is [${subArray}] and sum is ${maxSum}`;
}

console.log(maxSubArray([2, 3, -8, 7, -1, 2, 3])); // Output: 11


// Alternative implementation to find the maximum sum of a contiguous subarray with subarray.
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    let subArray = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            subArray.push(nums.slice(i, j + 1));
        }
    }

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    for (let i = 0; i <= subArray.length - 1; i++) {
        let arrSum = subArray[i].reduce((acc, val) => acc + val, 0);
        if (arrSum === maxSum) {
            return `Sub array is [${subArray[i]}] and sum is ${arrSum}`
        }
    }
    const end = performance.now();
    console.log(`Execution time: ${(end - start).toFixed(4)} milliseconds`);

}

console.log(maxSubArray([2, 3, -8, 7, -1, 2, 3])); // Output: 11

