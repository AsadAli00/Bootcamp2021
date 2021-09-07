"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemcollection_1 = require("./itemcollection");
console.clear();
let coll1 = new itemcollection_1.ItemCollection();
coll1.addTodo("purchase mango");
coll1.addTodo("eat biryani");
coll1.addTodo("Tikka");
coll1.PrintDetail();
