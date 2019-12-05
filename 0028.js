var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    if (needle.length > haystack.length) return -1;
    let i = 0;
    while (i < haystack.length - needle.length + 1) {
        if (haystack.slice(i, i + needle.length) === needle) return i;
        i++;
    }
    return -1;
};
