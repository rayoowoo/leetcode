var groupAnagrams = function(strs) {
    const result = [[strs[0]]];
    for (let i = 1; i < strs.length; i++) {
        let existing = true;
        // let j = 0;
        // while (existing && j < result.length) {
        //     if (ana(result[j][0], strs[i])) {
        //         result[j].push(strs[i]);
        //         existing = false;
        //     } else {
        //         j++;
        //     }
        // }
        
        for (let j = 0; j < result.length; j++) {
            if (ana(result[j][0], strs[i])) {
                result[j].push(strs[i]);
                existing = false;
                break;
            }
        }
        
        if (existing) result.push([strs[i]]);
    }
    
    return result;
};

function ana(str1, str2) {
    const letters = {};
    for (let j = 0; j < str1.length; j++) {
        const el = str1[j];
         if (letters[el]) {
             letters[el] += 1;
         } else {
             letters[el] = 1;
         }
    }
    for (let i = 0; i < str2.length; i++) {
        const el = str2[i];
        if (!letters[el]) {
            return false;
        } else {
            letters[el] -= 1;
            if (letters[el] === 0) delete letters[el];
        }
    }
    
    return !Object.keys(letters).length
}
