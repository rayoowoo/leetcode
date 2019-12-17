// left or right logic from https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/423834/Javascript-solution

var search = function(nums, target) { 
    
    function rotatedFind(nums, target, start, end) {
        if (start > end) return -1;
        const rotated = nums[start] < nums[end];
        const smallerThanLeft = target < nums[start];
        const largerThanRight = target > nums[end];

        if (smallerThanLeft && largerThanRight) return -1;

        if (nums[start] === target) return start;
        if (nums[end] === target) return end;

        const center = Math.floor((start + end) / 2);
        if (nums[center] === target) return center;

        if (
            (nums[center] > nums[start] && nums[center] > target && target >= nums[start]) ||
            (nums[center] < nums[start] && !(target > nums[center] && target <= nums[end]))
            ) {
            return rotatedFind(nums, target, start, center);
        } else {
            return rotatedFind(nums, target, center + 1, end);
        }
    }

    return rotatedFind(nums, target, 0, nums.length - 1)
};
