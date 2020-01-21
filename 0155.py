class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.min = math.inf
        self.stack = []

    def push(self, x: int) -> None:
        self.stack.append(x)
        if x < self.min:
            self.min = x

    def pop(self) -> None:
        self.stack.pop()
        minimum = math.inf
        for num in self.stack:
            if num < minimum:
                minimum = num
        self.min = minimum
        

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
