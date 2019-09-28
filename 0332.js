var findItinerary = function(tickets) {
    const schedule = {};
    for (let [start, end] of tickets) {
        if (!schedule[start]) {
            schedule[start] = [end];
        } else {
            schedule[start].push(end);
            schedule[start].sort();
        }
    }
    
    const result = [];
    findNext("JFK");
        
    function findNext(next) {
        const nextFlight = schedule[next];
        while (nextFlight && nextFlight.length > 0) {
            findNext(nextFlight.shift());
        }
        result.unshift(next);
    }
    
    return result;
};

// help from https://leetcode.com/problems/reconstruct-itinerary/discuss/78802/JavaScript-122ms-recursive-Solution
