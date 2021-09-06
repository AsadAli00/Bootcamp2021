"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(taskId, task, done = true) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }
    printTask() {
        console.log(`the Id is  ${this.taskId} \n Task is ${this.task} \n completed  ${this.done}`);
    }
}
exports.Task = Task;
