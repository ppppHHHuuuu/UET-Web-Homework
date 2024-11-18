function taskA() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task A Done");
            resolve();
        }, 2000); // 2s
    });
}

function taskB() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task B Done");
            resolve();
        }, 1000); // 1s
    });
}

function taskC() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task C Done");
            resolve();
        }, 10000); // 10s
    });
}

function taskD() {
    console.log("Task D Done");
}

taskA()
    .then(() => taskB())
    .then(() => taskC())
    .then(() => taskD())
    .catch(err => console.error("Error:", err));