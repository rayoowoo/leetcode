var combinationSum = function(candidates, target) {
    if (target === 0) return [[]];
    if (target < 0) return [];
    
    const results = [];

    for (let i = 0; i < candidates.length; i++) {
        const candidate = candidates[i];
        if (target >= candidate) {
            prev = combinationSum(candidates.slice(i), target - candidate)
            if (prev.length) {
                prev.forEach(el => {
                    results.push([candidate].concat(el));
                })
            }
        }
    }
    if (!results.length) return [];
    return results;
};
