export class Task{
    public constructor(public taskId:number, public task:string, public done: boolean = true){
         
    }

    printTask(): void{
        console.log(`the Id is  ${this.taskId} \n Task is ${this.task} \n completed  ${this.done}`);
    }
}