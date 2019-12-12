var generateParenthesis = function(n) {
    if (!n) return [""];
    
    const prev = generateParenthesis(n-1);
    const results = new Set();
    prev.forEach(el => {
        results.add(`(${el})`);
        results.add(el + "()");
        results.add("()" + el);
    })
    
    return Array.from(results);    
    
};

// This attempt did not work. 
