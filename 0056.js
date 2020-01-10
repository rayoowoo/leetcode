var merge = function(intervals) {
    if (!intervals.length) return [];
    const result = [];
    intervals = intervals.sort( (a,b) => a[0] - b[0]);
    result.push(intervals[0])
    for (let i = 1; i < intervals.length; i++) {
        const prev = result[result.length - 1];
        const prevEnd = prev[1];
        const nextEnd = intervals[i][1];
        if (prev[1] >= intervals[i][0]) {
            result.pop();
            result.push([prev[0], prevEnd > nextEnd ? prevEnd : nextEnd ]);
        } else {
            result.push(intervals[i])
        }
    }
    return result;
};
