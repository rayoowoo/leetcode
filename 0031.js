var nextPermutation = function(nums) {
    function swap(pos1, pos2) {
        const temp = nums[pos1];
        nums[pos1] = nums[pos2];
        nums[pos2] = temp;
    }
    
    function reverse(start) {
        let end = nums.length - 1;
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    let i = nums.length - 1;
    while (i >= 0 && nums[i] <= nums[i - 1]) {
        i--;
    }
    
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i - 1]) {
        j--;
    }
    
    if (i === 0) {
        reverse(i);
    } else {
        swap(i - 1, j);
        reverse(i);
    }

};

// solution using two pointers, but I haven't exactly determined why this works. 
// solution from https://leetcode.com/problems/next-permutation/discuss/410514/JavaScript-Solution
