var isValid = function (s) {
    const stack = [];
    const last = () => {
        if (!stack.length) {
            return null;
        } else {
            return stack[stack.length - 1];
        }
    }
    const check = (i, type) => {
        let open, close;
        switch (type) {
            case "parens":
                open = "(";
                close = ")";
                break;
            case "bracket":
                open = "[";
                close = "]";
                break;
            case "curly":
                open = "{";
                close = "}";
                break;
        }

        if (s[i] === open) stack.push(s[i]);
        if (s[i] === close) {
            if (last() === open) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (check(i, "parens") === false) return false;
        if (check(i, "bracket") === false) return false;
        if (check(i, "curly") === false) return false;
    }
    if (!stack.length) {
        return true;
    }
    return false;
};