var coinChange = function(coins, amount, memo = {}) {
    const key = coins.concat(amount);
    if (key in memo) return memo[key];    

    if (amount === 0) return 0;
    let sum = Infinity;
   
    for (let i = 0; i < coins.length; i++) {
        coin = coins[i];
        let attempt = 0;
        if (coin <= amount) {
            attempt += 1 + coinChange(coins, amount - coin, memo);
            if (!attempt) continue;
            if (attempt < sum) {
                sum = attempt;
            }
        }
    }
    if (sum === Infinity) return -1;
    memo[key] = sum;
    return sum;
};
