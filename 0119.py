class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        sol = [1,1]
        
        if rowIndex < 2:
            return sol[:rowIndex + 1]
        
        while rowIndex > 1:
            for i in range(len(sol) - 1):
                sol[i] += sol[i + 1]
            sol.insert(0, 1)
            rowIndex -= 1
            
        return sol
        
        
