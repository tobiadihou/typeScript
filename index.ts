let  x =0;
let isFirst:boolean = true;
let helloWord:string = "ni plus ni plus";

let y:string;
// y = 0;
let z =0;
y = "hello word"

const sum =(a:number,b:number) :number =>  a + b;
sum(1,1);

/**
 * les type en typescrpt
 * */

type User = {
    fname: string;
    lname: string;
    age?: number;
};



/**
 * les interface  en typescrpt
 * */

interface User2 {
    fname: string;
    lname: string;
    age?: number;
};

interface Admin {
    isdamin:Boolean
}

const users: User2 & Admin ={
    fname: "string",
    lname: "string",
    age: 0,
    isdamin:false
}

//les tableau 

let arr: number[]= [2,3,5,6];
let arrs: string[]= ["2,3,5,6"];
let arr2: Array<string>= ["pa","plus","sd"];
let arrIn: Array<number>=[21.35,5]

//lunion des type
 let arr4: (string | number | boolean)[] = [false,1,"sd"];

 //les generiques
 const returnval = <T> (arg:T) :T =>{arg};