
const variables =()=>{
    // Typescript allows you to declare variables with diffent types
    let a : number=10;
    let name: string ="shem";
    let evenNumber:number[] =[2,4,6,8];
    let value:any=[1,"shem",true];

    let g:(number|number|String)[]= [34,354,"Kyu"]

    console.log(`Type of g: ${typeof g} value: ${g}`);

    // console.log(`Type of a: ${typeof a},value:${a}`);
    // console.log(`Type of name: ${typeof name} && value: ${name}`);
    // console.log(`Type of evenNumber: ${typeof evenNumber} && value: ${evenNumber}`);
    // console.log(`Type of value: ${typeof value} && value: ${value}`);
}
export default variables;
