import { ItemCollection } from "./itemcollection";
console.clear();

let coll1:ItemCollection = new ItemCollection();

coll1.addTodo("purchase mango");
coll1.addTodo("eat biryani");
coll1.addTodo("Tikka");


coll1.taskDone(2);
coll1.taskDone(1);


coll1.PrintDetail();
