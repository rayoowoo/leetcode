var coinChange = function(coins, amount, memo = {}, top=true) {
    if (amount in memo) return memo[amount];    

    if (amount === 0) return 0;
    let sum = Infinity;
   
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        let attempt = 0;
        if (coin <= amount) {
            attempt += 1 + coinChange(coins, amount - coin, memo, false);
            if (attempt < sum) {
                sum = attempt;
            }
        }
    }
    if (top && sum === Infinity) return -1;
    memo[amount] = sum;
    return sum;
};
