var canJump = function(nums) {
    const possibility = new Array(nums.length).fill(false);
    possibility[0] = true;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (!possibility[i]) return false;
        for (let j = i + 1; j <= i + nums[i]; j++) {
            possibility[j] = true;
        }
    }
    return possibility[nums.length - 1];
};
