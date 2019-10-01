// using a hashmap
var singleNumber = function (nums) {
    const counter = {};
    nums.forEach(el => {
        if (counter[el]) {
            counter[el]++;
        } else {
            counter[el] = 1;
        }
    })
    for (key in counter) {
        if ((counter[key]) === 1) return key;
    }
};

// using bit manipulation, from https://leetcode.com/problems/single-number-ii/discuss/299718/javascript
var singleNumber = function (nums) {
    let a = 0, b = 0;
    nums.forEach(c => {
        [a, b] = [(~a & b & c) | (a & ~b & ~c), (~a & ~b & c) | (~a & b & ~c)];
    })
    return b;
};

// explanation here:
// https://leetcode.com/problems/single-number-ii/discuss/43296/An-General-Way-to-Handle-All-this-sort-of-questions.
// Look for the comments by felixhao28 and Blackknight
