const generics = () =>{

// Case 1
    // function convertToArray(input:number):number[]{
    //     return [input]
    // }
    // console.log(convertToArray(10));
// Case 2
    function convertToArray2(input:string):string []{
        return [input]
    }
// case 3
     
     function convertToArray3(input:object):object[]{
        return [input]
     }

    //  Generics helps to solve the issues with the above scenrios
    // Case 4 Generics

    function convertToArray<T>(input: T):T[]{
        return[input]
    }
    console.log(convertToArray(10)) //10
    console.log(convertToArray('shem')) //shem
    console.log(convertToArray({name:"shem",age : 22}))
    console.log(convertToArray({course: "cse" , reg_no:23444}))

    const getInputs = <T,K>(input1: T, input2:K):[T, K]=>{
        return[input1,input2]
    }
    console.log(getInputs(10, "muli"))
    console.log(getInputs("shem", 22))

    //function which receivess an array ,array item => return 
    // the index of array item
    
    const getIndexOfArraysItem =<T>(Array: T[], item: T)=>{
        return Array.findIndex((itemInsideArray)  => itemInsideArray === item)
    }
    console.log(getIndexOfArraysItem(['james', 'nike','mike','shem','simon'], 'shem'))


}
export default generics;

