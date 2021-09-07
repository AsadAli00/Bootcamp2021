"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
console.clear();
let item1 = new todoitem_1.TodoItem(1, "purchase icecream", false);
let item2 = new todoitem_1.TodoItem(2, "buy biryani", false);
item1.PrintDetail();
item2.PrintDetail();
