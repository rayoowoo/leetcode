var threeSumClosest = function(nums, target) {
    // brute force  
    
    let sum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const attempt = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - attempt) < Math.abs(target - sum)) sum = attempt;
            }
        }
    }
    return sum;
    
    //  failed logic
//     const numsList = nums.map(el => Math.abs(el - target));
    
//     let smallestValue = Infinity;
//     let smallerValue = Infinity;
//     let smallValue = Infinity;
    
//     let smallestIndex = null;
//     let smallerIndex = null;
//     let smallIndex = null;
    
//     for (let i = 0; i < numsList.length; i++) {
//         const nextValue = numsList[i];
//         console.log(smallestIndex);
//         console.log(smallerIndex);
//         console.log(smallIndex);

//         if (nextValue < smallValue) {
//             smallValue = nextValue;
//             smallIndex = i;
//             if (nextValue < smallerValue) {
//                 smallValue = smallerValue;
//                 smallIndex = smallerIndex;
//                 smallerValue = nextValue;
//                 smallerIndex = i;
//                 if (nextValue < smallestValue) {
//                     smallerValue = smallestValue;
//                     smallerIndex = smallestIndex;
//                     smallestValue = nextValue;
//                     smallestIndex = i;
//                 }
//             }
//         }
//     }
    
//     return nums[smallestIndex] + nums[smallerIndex] + nums[smallIndex]
};
