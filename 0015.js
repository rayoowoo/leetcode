// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = target?
// Find all unique triplets in the array which sum to the target.

function threeSum(arr, target) {
    const newArr = [];
    arr = arr.sort();
    if (arr.length < 3) return null;

    // O(n) for looping through the array once
    for (let first = 0; first < arr.length; first++) {
        const difference = target - arr[first];

        // an O(n) version of twoSum
        let head = first + 1;
        let tail = arr.length - 1;
        while (head < tail) {
            if (arr[head] + arr[tail] < difference) {
                head++;
            } else if (arr[head] + arr[tail] > difference) {
                tail--;
            } else {
                newArr.push([arr[first], arr[head], arr[tail]])
                head++;
                tail--;
            }
        }
    }

    return newArr;
}


console.log(threeSum([1, 2, 3, 4, 5, 6, 7], 11)) // [[1, 4, 6], [1, 3, 7], [2, 3, 6], [2, 4, 5]]
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 9)) // [[2, 7], [3, 6], [4,5]]