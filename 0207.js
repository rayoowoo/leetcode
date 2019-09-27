function canFinish(count, dependencies) {
    let projects = [];
    for (let i = 0; i < count; i++) {
        projects.unshift(i);
    }

    const depList = {};
    const order = [];
    const done = new Set();

    dependencies.forEach(pair => {
        if (depList[pair[0]]) {
            depList[pair[0]].push(pair[1]);
        } else {
            depList[pair[0]] = [pair[1]];
        }
    })

    projects.forEach(project => {
        if (!depList[project]) {
            depList[project] = [];
            order.push(project);
            done.add(project);
        }
    })

    let stuck = false;
    while (!stuck && order.length < projects.length) {
        const currLength = order.length;
        projects.forEach(project => {
            if (done.has(project)) return;
            if (depList[project].every(el => done.has(el))) {
                order.push(project);
                done.add(project);
            }
        })
        if (currLength === order.length) stuck = true;
    }

    if (stuck) return false;
    return true;
}