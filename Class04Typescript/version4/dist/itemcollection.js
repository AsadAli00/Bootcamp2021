"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoitem_1 = require("./todoitem");
class ItemCollection {
    constructor(Item = []) {
        this.Item = Item;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new todoitem_1.TodoItem(this.nextId, task, false);
        this.nextId++;
        this.Item.push(item);
    }
    PrintDetail() {
        this.Item.forEach((item) => item.PrintDetail());
    }
}
exports.ItemCollection = ItemCollection;
