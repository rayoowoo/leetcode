var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval];
    if (intervals[0][0] > newInterval[0]) {
        intervals.unshift(newInterval)
        return merge(intervals);
    } else {
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] > newInterval[0]) {
                intervals.splice(i-1, 0, newInterval)
                return merge(intervals);
            }
        }
        intervals.push(newInterval);
        return merge(intervals);
    }
};

// My own merge inteval solution
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
