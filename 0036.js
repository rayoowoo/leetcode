var isValidSudoku = function(board) {
    // validation function
    function validate(arr) {
        const count = new Set();
        for (let i = 0; i < arr.length; i++) {
            if (count.has(arr[i])) return false;
            if (arr[i] !== ".") count.add(arr[i]);
        }
        return true;
    }
        
    // Checking every row and column
    for (let idx = 0; idx < board.length; idx++) {
        if (!validate(board[idx])) return false;
        const checkColumn = board.map(el => el[idx]);
        if (!validate(checkColumn)) return false;
    }
    
    // Checking every subbox
    
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            const box = [];
            for (let subrow = 0; subrow < 3; subrow++) {
                for (let subcolumn = 0; subcolumn < 3; subcolumn++) {
                    box.push(board[subrow + 3*x][subcolumn + 3*y]);
                }
            }
            if (!validate(box)) return false;
        }
    }
    
    // If everything checks out
    return true
};
