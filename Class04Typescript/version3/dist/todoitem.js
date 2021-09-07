"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    PrintDetail() {
        console.log(`ID=${this.id} \t Task=${this.task} \t status=${this.complete}`);
    }
}
exports.TodoItem = TodoItem;
