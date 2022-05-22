let number =12;//let is used as type or variable
//number ='5'//if we compile as javascript its not error ,typescript
let var1;//if we not say type it will be any
var1=5;
var1='a';
var1=true;

let var2:number;
//var2='asd';

let a :number;
let b:string;
let c:boolean=true;
let d:any;
let e:number[];
let f:string[];
let g:Array<number>;
//let h:number[] =[1,2,'4'] // error
let j:number[] =[2,4,5];
let y :any[]=[1,'2',true,0.2323]
let r :[string,number,boolean]=['s',2,false];

const krediPayment=0;
const fastPayment=2;
const eftPayment=3;

//using enums
enum Payment {krediPayment,fastPayment,eftPayment};
let kredit =Payment.krediPayment;//0
let fast =Payment.fastPayment;//2
let eft=Payment.eftPayment;//3
//using enums best practices
enum PaymentNew {krediPaymentNew=0,fastPAyemnt=3,paypalPayment=3};
