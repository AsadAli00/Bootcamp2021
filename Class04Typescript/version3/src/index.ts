import { TodoItem } from "./todoitem";

console.clear();

let item1: TodoItem= new TodoItem(1,"purchase icecream", false);
let item2: TodoItem= new TodoItem(2, "buy biryani", false);

item1.PrintDetail();
item2.PrintDetail(); 