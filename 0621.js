var leastInterval = function (tasks, n) {
    if (!n) return tasks.length;

    let separatedTasks = {};
    tasks.forEach(task => {
        if (!(task in separatedTasks)) {
            separatedTasks[task] = [task];
        } else {
            separatedTasks[task].push(task);
        }
    })

    let done = [];
    const types = Object.keys(separatedTasks).length;
    let bool = true;
    while (bool) {
        Object.values(separatedTasks).forEach(el => {
            if (el.length) done.push(el.pop())
        })
        if (Object.values(separatedTasks).every(el => el.length)) {
            for (let i = 1; i <= n - types + 1; i++) {
                done.push("idle");
            }
        } else {
            bool = false;
        }
    }
    console.log(done);
    return done.length;
};

// not the right answer. The following is, from https://leetcode.com/problems/task-scheduler/discuss/207861/Simple-reduce-function-for-Javascript

var leastInterval = function (tasks, n) {
    let counter = {};
    tasks.forEach(task => { counter[task] = counter[task] && counter[task] + 1 || 1 });

    let keys = Object.keys(counter).sort((a, b) => {
        return counter[b] - counter[a]
    });

    return keys.reduce((res, value, index) => {
        return Math.max(res, (counter[value] - 1) * (n + 1) + index + 1)
    }, tasks.length);
};