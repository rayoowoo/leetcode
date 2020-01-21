class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        j = 0
        for i in range(m, m + n):
            nums1[i], nums2[j] = nums2[j], nums1[i]
            j += 1
        
        print(nums1)
        
        def bubble(lst):
            
            sorted = False
            while not sorted:
                sorted = True
                for i in range(0, len(lst) - 1):
                    if lst[i] > lst[i + 1]:
                        lst[i], lst[i + 1] = lst[i + 1], lst[i]
                        sorted = False
            
            
        bubble(nums1)
