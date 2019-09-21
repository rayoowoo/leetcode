// 4. Median of Two Sorted Arrays

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).
// You may assume nums1 and nums2 cannot be both empty.

const findMedianSortedArrays = function (nums1, nums2) {
    const sorted = merge(nums1, nums2);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle] + sorted[middle - 1]) / 2;
    } else {
        return sorted[middle];
    }
};

function merge(nums1, nums2) {
    const result = [];
    while (nums1.length && nums2.length) {
        const try1 = nums1[0];
        const try2 = nums2[0];
        if (try1 < try2) {
            result.push(nums1.shift())
        } else {
            result.push(nums2.shift())
        }
    }
    return result.concat(nums1).concat(nums2);
}