// recursive solution
var subsets = function (nums) {
    //     recursively
    if (!nums.length) return [[]];
    let results = [];
    const visited = new Set();

    nums.forEach((el, i) => {
        subsets(nums.slice(i + 1)).forEach(subArr => {
            const sorted = subArr.sort();
            const newSub = Object.assign([], subArr);
            newSub.push(el);
            const alsoSorted = newSub.sort();

            if (!visited.has(sorted.join(""))) {
                visited.add(sorted.join(""));
                results.push(sorted)
            }

            if (!visited.has(alsoSorted.join(""))) {
                visited.add(alsoSorted.join(""));
                results.push(alsoSorted);
            }
        })
    })


    return results;
};

// bitwise solution from https://leetcode.com/problems/subsets/discuss/353351/JavaScript-with-bit-manupulation

var subsets = function (nums) {
    let totalSubset = 1 << nums.length;
    let retVal = [];
    for (let i = 0; i < totalSubset; i++) {
        retVal.push(extractNumbers(nums, i));
    }

    return retVal;
};

var extractNumbers = function (nums, n) {
    let retVal = [];
    let index = 0;
    while (n > 0) {
        if (n & 1) {
            retVal.push(nums[index]);
        }
        n = n >> 1;
        index++;
    }

    return retVal;
}