import { Task } from "./task";
import { TaskCollection } from "./TaskColllection";


let task01: TaskCollection = new TaskCollection();

task01.addTodo("mango le ao");
task01.addTodo("biryani khani hy");

task01.PrintAll(); 
task01.taskDone(2)
task01.PrintAll();

task01.getTodoById(1);