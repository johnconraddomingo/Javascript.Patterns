var createWorkerInline = function () {

    return {

        inlineJob: function () {
            console.log("Performing Inline Job ");
        }
        // Another inline job can go here
    }
};

var createWorker = function () {

    var workCounter = 0;
    var job1 = function () {
        workCounter++;
        console.log("Performing Job 1. Count " + workCounter);
    };

    var job2 = function () {
        workCounter++;
        console.log("Performing Job 2. Count " + workCounter);
    };

    return {
        task1: job1,
        task2: job2
    }
};

var worker = createWorker();
worker.task1();
worker.task2();
worker.task2();
worker.workCounter++; // This will not work: Undefined
worker.task1();

var workerInLine = createWorkerInline();
workerInLine.inlineJob();