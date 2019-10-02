// hashmap way
var majorityElement = function (nums) {
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if (!counter[el]) counter[el] = 0;
        counter[el]++;
        if (counter[el] > nums.length / 2) return el;
    }
};