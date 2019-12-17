var searchRange = function(nums, target) {
    function find(nums, target, start, end) {
        if (start > end) return [-1, -1];
        
        let left;
        let right;

        const mid = Math.floor((start + end) / 2);
        
        let prevLeft;
        let prevRight;
    
        if (target < nums[mid]) {
            [prevLeft, prevRight] = find(nums, target, start, mid - 1);
            if (!left || prevLeft >= 0 && prevLeft < left) left = prevLeft;
            if (!right || prevRight > right) right = prevRight;
        } else if (target > nums[mid]) {
            [prevLeft, prevRight] = find(nums, target, mid + 1, end);
            if (!left || prevLeft >= 0 && prevLeft < left) left = prevLeft;
            if (!right || prevRight > right) right = prevRight;
        } else {
            left = right = mid;
            prevLeft = find(nums, target, start, mid - 1)[0];
            if (prevLeft >= 0 && prevLeft < left) left = prevLeft;
            prevRight = find(nums, target, mid + 1, end)[1];
            if (prevRight > right) right = prevRight;
        }
        
        return [left, right];
    }
    
    return find(nums, target, 0, nums.length - 1)
};
