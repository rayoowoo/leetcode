function calculateWater(arr) {
    const compare = arr[0];
    let sum = 0;
    arr.slice(1, arr.length - 1).forEach(el => {
        sum += compare - el;
    })
    return sum;
}

function trap (height) {
    let results = []
    height.forEach((el, i) => {
        if (i > height.length - 3) return;
        let sample = [el];
        let idx = i + 1;
        while (height[idx] < el && idx < height.length) {
            sample.push(height[idx]);
            idx++;
        }
        if (idx !== height.length) sample.push(height[idx])
        if (sample.length > 2 && sample[0] <= sample[sample.length - 1]) results.push(sample);
    })
    console.log(results);

    let sum = 0;
    results.forEach(el => {
        sum += calculateWater(el);
    })

    return sum;
};

console.log(calculateWater([2, 1, 0, 1, 3]));