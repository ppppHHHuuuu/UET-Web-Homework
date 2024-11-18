function fetchData1(callback) {
    setTimeout(() => {
        console.log("Wait 1s for data");
        callback();
    }, 1000);
}

function fetchData2(callback) {
    setTimeout(() => {
        console.log("Wait 2s for data");
        callback();
    }, 2000);
}

function fetchData3(callback) {
    setTimeout(() => {
        console.log("Wait 3s for data");
        callback();
    }, 3000);
}

function fetchData4(callback) {
    setTimeout(() => {
        console.log("Wait 4s for data");
        callback();
    }, 4000);
}

fetchData1(() => {
    fetchData2(() => {
        fetchData3(() => {
            fetchData4(() => {
                console.log("All data fetched");
            });
        });
    });
});
