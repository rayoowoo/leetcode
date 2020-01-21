class Solution:
    def generate(self, numRows: int) -> List[List[int]]:     
        sol = [[1], [1,1]]
        
        if numRows <= 2:
            return sol[:numRows]
        
        while numRows > 2:
            numRows -= 1
            prev = sol[-1]
            newRow = [1]
            for i in range(0, len(prev) - 1):
                newRow.append(prev[i] + prev[i + 1])
            newRow.append(1)
            sol.append(newRow)
            
        return sol
            
