var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length) return i;
        if (nums[i] >= target) return i;
    }
    return nums.length;
};
