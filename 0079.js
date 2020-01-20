var exist = function (board, word) {
	if (word.length > board.length * board[0].length) return false;
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			const tile = board[row][col];
			if (tile === word[0]) {
                if (explore(board, word.slice(1), [[row, col]])) return true;
            }
		}
	} return false;
};

function explore(board, word, register) {
    if (word === "") return true;
    const possibleMoves = validMoves(register, board.length, board[0].length);
    for (let i = 0; i < possibleMoves.length; i++) {
        const [row, col] = possibleMoves[i];
        if (board[row][col] === word[0]) {
            if (explore(board, word.slice(1), register.concat([[row, col]]))) return true;
        } 
    }
	return false;
}

function validMoves(reg, Xmax, Ymax) {
	const [currX, currY] = reg[reg.length - 1];
	const directions = [[-1 + currX, 0 + currY], [1 + currX, 0 + currY], [0 + currX, 1 + currY], [0 + currX, -1 +currY]].filter(el => {
			return !(el[0] >= Xmax || el[0] < 0 || el[1] >= Ymax || el[1] < 0 || inRegister(el, reg))
		})
	return directions;
}
function eqPos(pos1, pos2) {
	const [x1, y1] = pos1;
	const [x2, y2] = pos2;
	return x1 === x2 && y1 === y2;
}

function inRegister(pos, reg) {
	return reg.some(el => eqPos(el, pos))
}
