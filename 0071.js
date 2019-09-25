const simplifyPath = function (path) {
    const directories = []; // my stack
    path = path + "/";
    let file = "";
    for (let i = 0; i < path.length; i++) {
        console.log(file)
        if (path[i] === "/") {
            if (file === "..") {
                console.log("POPPED")
                directories.pop();
                console.log(directories);
            } else {
                if (file.length && file !== ".") directories.push(file);
            }
            file = "";
        } else {
            file += path[i];
        }
    }
    if (!directories.length) return "/";
    return directories.map(el => "/" + el).join("");
};