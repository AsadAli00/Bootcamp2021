export class TodoItem{
    public constructor(public id:number, public task:string, public complete:boolean){

    }

    PrintDetail(): void{
        console.log(`ID=${this.id} \t Task=${this.task} \t status=${this.complete}`);
    }
}