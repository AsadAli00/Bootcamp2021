"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const task_1 = require("./task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new task_1.Task(this.nextId, task, false);
        //this.nextId = this.nextId + 1;
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new task_1.Task(this.nextId, task));
    }
    PrintAll() {
        this.tasks.forEach((item) => item.printTask());
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    taskDone(taskId) {
        let item = this.tasks.find((item) => item.taskId == taskId);
        item.done = true;
    }
}
exports.TaskCollection = TaskCollection;
