var groupAnagrams = function(strs) {
    const unique = {};
    for (let str of strs) {
        const uniq = str.split("").sort().join("");
        
        if (unique[uniq]) {
            unique[uniq].push(str);
        } else {
            unique[uniq] = [str];
        }
    }
    
    return Object.values(unique);
}
