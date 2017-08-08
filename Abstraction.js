var work = function () {
    console.log("    Doing Work.");
};

var doWork = function (f) {

    console.log("Calling Work...");
    f();
    console.log("Work Called.");
};

doWork(work);