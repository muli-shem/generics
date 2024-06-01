const myfunction =()=> {
    // arrow functions 
    const add =(a:number, b:number):number =>{
        return a+b;
    }
    const add2 =(a:number, b:number):number => a+b;
    // console.log(add(34,54));
    // console.log(add2(45,56))
    // optional parameters
    const fullname =(firstname:string , lastname:string):string=>{
        return  lastname?`${firstname} ${lastname}`:firstname;
    }
    // console.log(fullname("shem" ,"muli"))
    // default parameters
    const fullName = (firstname:string, lastname: string = "muli"):string=>{
        return `${firstname} ${lastname}`;
    }
    console.log(fullName("Mutua"))

    const getSalary = (basic:number, bonus:number=0):number =>{
        return basic + bonus;
    }
    // console.log(getSalary(1000,355))
    // console.log(getSalary(1000))

    const greet=():void=>{
        console.log("hello world")
    }
    // rest parameters
    function greeting(greeting:string, ...names:any):string{
        return `${greeting}, ${names.join(", ")}!`;
    }
    // console.log(greeting("Hello","Shem","Muli","Joshua",))

    const addNumbers =(...numbers:number[]):number=>{
        return numbers.reduce((sum, num) =>sum+num,0);
        }
        // console.log(addNumbers(1,3,4,5,56,6,5,45,34,34,43,34,4,34));
        // console.log(addNumbers(10,100,1000,10000,1000,10000));
    // Normal function
    function add4(a:number,b:number){
        return a+b;
    
    }
    console.log(add4(45,56));
  
}
export default myfunction;