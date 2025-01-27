// function sum(a : number, b : number): number {
//     return a + b;
// }
// sum(5,6);

// function sum(a : number, b : number, conversation: "as-string" | "as-number"): number | string {
//     if(conversation === "as-string"){
//         return String(a) + String(b);
//     }else{
//         return +a + +b;
//     }
// }
// console.log(sum(5,6, "as-number"));

// let a : any = 5;
// a = "String";
// a = {
//     name: "Abbas",
//     greet: () : void => {
//         console.log("Hello!");
//     }
// };

// a.greet();

// if(typeof a === "object" && a !== null && "greet" in a) a.greet();


// function getFirstThree(x: number[] | string) {
//     return x.slice(0, 3);
// }

// console.log(getFirstThree("abbas"));


// type detail = {
//     name: string;
//     age: number;
//     hobby: string; // to solve error
// };

// function getDetail(detail: detail): detail {
//     return detail;
// }

// console.log(getDetail({
//     name: "Abbas",
//     age: 25,
//     hobby : "Drawing", //error
// }));

// interface Coordinates {
//     x: number;
//     y: number;
// }

// function getCordinate(cord: Coordinates) : void{
//     console.log("Coordinates Of X Axis is " + cord.x);
//     console.log("Coordinates Of Y Axis is " + cord.y);
// }

// getCordinate({
//     x: 5,
//     y: 10,
// });

// let arr : any[] = [];

// arr.push("Hello");
// arr.push(1);
// console.log(arr);

// class Human {

//     name: string = "";
//     age: number = 0;

//     constructor(data : {
//         name: string,
//         age: number;
//     }) {
//         this.name = data.name;
//         this.age = data.age;
//     }
// }

// const newHuman = new Human({
//     name: "John Doe",
//     age: 15,
// });
// console.log(newHuman.age);

// enum Direction {
//     Up = 20,
//     Left,
//     Down,
//     Right,
// };

// console.log(Direction.Up, Direction.Left);
// console.log(Direction[0], Direction[21]);

// enum Role {
//     Admin = "ADMIN",
//     User = "USER",
//     Guest = "GUEST"
// }

// function checkRole(role: Role) {
//     if (role === Role.Admin) {
//         console.log("Welcome Admin!");
//     }
// }
// checkRole(Role.Admin); // Output: Welcome Admin!

// Enums ko samajhne ke liye ek simple rule yaad rakho:  
// "Jab bhi aapko **fixed options** ki zarurat ho jo meaningful aur organized ho, enums use karo!"
// jaise role mai role pata thai ye hai or ye hai

// class Department {
//     name: string;
//     constructor(data: {
//         name: string
//     }){
//         this.name = data.name;
//     };

//     describe(){
//         console.log("Department", this.name);
//     }
// }


// const accounting = new Department({name: "Abbas",});
// const accountingCopy = {
//     name: "Accounting",
//     describe: accounting.describe,
// };

// accounting.describe();
// accountingCopy.describe(); // will print underfined because this indicates to {} braces so uncomment name to see the magic

// function addHandle(num1: number, num2: number, cb){
//     const result = num1 + num2;
//     cb(result);
// }

// addHandle(5, 6, (n: number) : void =>{
//     console.log(n);
// })

// class Department {
//     employees: any[];

//     constructor(data: {
//         employees: any[]
//     }){
//         this.employees = data.employees;
//     };

//     getEmployeeCount(): number {
//         return this.employees.length;
//     }

//     getEmployeeData(id : number): any {
//         return this.employees.find(employee => employee.id === id);
//     };

//     addEmployee(employee: any) : void {
//         this.employees.push(employee);
//     }
// };

// const accounting = new Department({
//     employees: [],
// });

// accounting.addEmployee({id: 1, name: "Abbas"});
// console.log(accounting.getEmployeeData(1));
