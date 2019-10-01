var singleNumber = function (nums) {
    let value = nums[0];
    nums.slice(1).forEach(el => {
        value = value ^ el;
    })
    return value;
};