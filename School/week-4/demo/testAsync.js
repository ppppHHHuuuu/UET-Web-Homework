function taskA() {
        setTimeout(() => {
            console.log("Task A Done");
        }, 2000); // 1s
}
function taskB() {
        setTimeout(() => {
            console.log("Task B Done");
        }, 1000); // 1s
}
function taskC() {
        setTimeout(() => {
            console.log("Task C Done");
        }, 100); // 0.1s
}
function taskD() {
    console.log("Task D Done")
}
function runTasks() {
    taskA()
    taskB()
    taskC()
    taskD()
}

runTasks();

