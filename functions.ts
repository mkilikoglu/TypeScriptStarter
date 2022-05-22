function  getAvarage(a,b,c){
    const result  = (a+b+c)/8;
    return 'result : '+result;
}
getAvarage(10,20,30);//not a best

function getAvarage2(a:number,b:number):string{
    const result =(a+b)/2;
    return 'result'+ result;
}
let string = getAvarage2(2,5);
//c is optional now
function getAvarage3(a:number,b:number,c?:number):string {
    let total =a+b;
    let count =2;

    if (typeof c !== 'undefined') {
      total+=c;
      count++;
    }
    const result = total/count;
    return 'result '+result

}
let t = getAvarage3(4,7);console.log(t)
let y = getAvarage3(4,7,9);

//let y:number =getAvarage3(4,7);


function getAvarage4(...a:number[]):string{

    let total = 0;
    let count =0;
    for(let i=0;i<a.length;i++){
        total+=a[i];
        count++;
    }
    const result = total/count;
    return 'result '+result

}
getAvarage4(4,6,7,8,8,);


const avarageResult = (...a:number[]):string=>{

    return '';
}

const avarageResult2 = (...a:number[]):void=>{


}
