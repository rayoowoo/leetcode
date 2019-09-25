const largestRectangleArea = function (heights) {
    let max = 0;
    heights.forEach(el => {
        if (el > max) max = el;
    })

    largest = 0;
    const visited = new Set();
    heights.forEach(i => {
        if (visited.has(i)) return;
        visited.add(i);
        let roundTotal = 0;
        heights.forEach(el => {
            if (el >= i) {
                roundTotal += i;
            } else {
                roundTotal = 0;
            }
            if (roundTotal > largest) largest = roundTotal;
        })
    });
    return largest;

};