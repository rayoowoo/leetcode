import math
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        
        min = math.inf
        
        for day in prices:
            if day < min:
                min = day
            else:
                if day - min > profit:
                    profit = day - min
                    
        return profit
