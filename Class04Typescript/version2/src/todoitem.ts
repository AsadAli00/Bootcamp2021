export class TodoItem{
    public id: number;
    public task: string;
    public complete: boolean;


    public constructor(id:number, task:string, complete:boolean){

        this.id = id; 
        this.task = task;
        this.complete = complete;

    }

    public PrintDetail(): void{

        console.log(`ID=${this.id} \t Task=${this.task} \t status=${this.complete}`);
        

    }
}