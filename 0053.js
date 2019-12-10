var maxSubArray = function(nums) {
    let sum = nums[0];
    let attempt = 0;
    
    let allNeg = true;
    let max = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
        if (nums[i] > 0) allNeg = false;
        if (attempt + nums[i] < 0) {
            attempt = 0;
        } else {
            attempt += nums[i]
            if (sum < attempt) sum = attempt;
        }
    }
    
    if (allNeg) return max;
    return sum;
};
