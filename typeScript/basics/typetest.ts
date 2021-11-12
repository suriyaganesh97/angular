function test1(a,b)
{
    return a*2 + b;
}
const result1 = test1(5,3);
console.log(result1);


let num1: number; // setting varaiable to number type
num1=23;

let bol1: boolean;  // boolean type
bol1= true;

let str1: string;  //string
str1 = 'suriya';

let arr1: number[]; //array of numbers
arr1 = [2,3];

let car: {  //object car created with 3 attributes of 3 types
    name: string,
    no_of_wheels:number,
    is_fast : boolean;
}

car = {
    name : "toyota",
    no_of_wheels:4,
    is_fast:true
}

let name1 : string | number  = 'tester'; //here we can now use string or number for name1 variable

name1=23; //like this


//type alias instead of repeating the type again and again we can use an alias like below

type SuperCar ={  //type keyword is used to create a new type and set such alias
    no_of_engine:number,
    name:string
}
let honda: SuperCar; // we are giving supercar type to the varaible honda
