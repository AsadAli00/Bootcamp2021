// var message:string = "Hello World!"
// var numeric:number = 10;
// var floating: number = 10.1;
// var  condition:boolean = true;
// var condition01: any = 123; 
// console.log(message,numeric,floating,condition,condition01);


// let Id:number;
// let Stu_name:string;
// let Stu_email:string;

// function set_student_value(id:number,stu_name:string,email:string) : void{
//     Id = id;
//     Stu_name = stu_name;
//     Stu_email= email;
// }

// function PrintDetail(){
//      console.log("The Id of Student is " + Id);
//      console.log("The name of Student is " + Stu_name);
//      console.log("The Email of Student is  "+ Stu_email);
// }

// set_student_value(1,"Asad","asadali111222@outlook.com");
// PrintDetail();

class Student {
    id: number;
    stu_name: string;
    stu_email: string;
    active:boolean;
   constructor (id: number, stu_name: string, stu_email: string, active:boolean = true) {
    this.id = id;
    this.stu_name = stu_name;
    this.stu_email = stu_email;
    this.active = active;
}

PrintDetail() {
    console.log("The Id of Student is " + this.id);
    console.log("The name of Student is " + this.stu_name);
    console.log("The Email of Student is  " + this.stu_email);
    console.log("Student active Status= "+ this.active);
}
}

let student01 = new Student (1,"Asad",'asadali11122@outlook.com');

console.log(student01);


// student01.set_student_value(1,"Asad","asadali11122@outlook.com");
student01.PrintDetail();