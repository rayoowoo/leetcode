function calculateWater(arr) {
    const compare = arr[0] < arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
    // const compare = arr[0];
    let sum = 0;
    arr.slice(1, arr.length - 1).forEach(el => {
        sum += compare - el;
    })
    return sum;
}



var trap = function (height) {
    const sets = [];
    function _trap (height, reverse=false) {
        let results = []
        let i = 0;
        while (i < height.length - 2) {
            let sample = [height[i]];
            let idx = i + 1;
            while (height[idx] < height[i] && idx < height.length) {
                sample.push(height[idx]);
                idx++
            }
            if (idx !== height.length) sample.push(height[idx])
            const bool = reverse ? sample[0] < sample[sample.length - 1] : sample[0] <= sample[sample.length - 1]
            if (sample.length > 2 && bool) {
                results.push(sample);
                i = idx;
            } else {
                i++;
            }
        }
        console.log("results", results);
        console.log("sets", sets);
        
        if (reverse) {
            results = results.filter( el => {
                return !sets.some( str => str.includes(el.join("")));
            })
        } else {
            results.forEach(el => {
                sets.push(el.reverse().join(""));
            })
        }
        

        let sum = 0;
        results.forEach(el => {
            sum += calculateWater(el);
        })

        return sum;
    }
    const front = _trap(height);
    const back = _trap(height.reverse(), true);
    return front + back;
};

console.log(trap([6, 8, 5, 0, 0, 6, 5]))