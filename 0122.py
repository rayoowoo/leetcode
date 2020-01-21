class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        min = math.inf
        
        if len(prices) == 1:
            return 0
        
        for i in range(len(prices)):
            if (i == len(prices) - 1):
                if prices[i - 1] <= prices[i]:
                    profit += prices[i] - min
            elif min > prices[i] or prices[i - 1] > prices[i]:
                min = prices[i]
            elif prices[i] > prices[i + 1]:
                profit += prices[i] - min
        
        return profit
            
