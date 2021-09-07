import { TodoItem } from "./todoitem";

export class ItemCollection {
    private nextId: number = 1;

    public constructor(public Item: TodoItem[] = []) {

    }

    public addTodo(task: string): void {
        let item: TodoItem = new TodoItem(this.nextId, task, false);
        this.nextId++;
        this.Item.push(item);
    }
    public PrintDetail(): void {
        this.Item.forEach((item: TodoItem) => item.PrintDetail());
    }

}