async function taskA() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task A Done");
            resolve();
        }, 2000); // 2s
    });
}
async function taskB() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task B Done");
            resolve();
        }, 1000); // 1s
    });
}
async function taskC() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task C Done");
            resolve();
        }, 10000); // 10s
    });
}
function taskD() {
    console.log("Task D Done")
}
async function runTasks() {
    await taskA(); 
    await taskB(); 
    await taskC(); 
    taskD(); 
}

runTasks();




