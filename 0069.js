var mySqrt = function(x) {
    if (x === 1 || x === 0) return x;

    let i = 0;
    while ( i * i <= x) {
        i++;
    }
    return i - 1;
};
