interface  Vehicle{

    addPassengers(passenger:Passenger):void;
}
interface  Point{
    x:number,
    y:number
}
interface Pay{

    total:string;
    type:string;
}

interface Passenger{

    name:string;
    phone:number;
}
export class Taxi implements Vehicle{
    /*private  color:string;
    private currentLocation:Point;*/
    constructor(private _location:Point,private _color:string, private p:Pay) {

    }
    addPassengers(passenger: Passenger) {
        console.log('Phone:'+passenger.phone,'Name:'+passenger.name+'location:X'+this._location.x+'LocationY'+this._location.y)
    }

    pay(){
        if(this.p.total=='0')
            console.log("total must be bigger than 0")
        else
            console.log( this.p.total+this.p.type)
    }

    get Info(){

        // console.log(this.location+" ---"+this.color+"---"+this.p)
        return this._location
    }

    set Color(color:string){

        this._color=color;
    }


}


let taxi_1:Taxi=new Taxi({x:1,y:7},'Blue',{type:'kreditcard',total:'231USD'});
//let taxi_2:Taxi=new Taxi({x:1,y:7},'ASASASAS');
console.log(taxi_1)
//console.log(taxi_2)

taxi_1.addPassengers({name:'sdsd',phone:36})
taxi_1.pay();

taxi_1.Color=('Purple');
let info=taxi_1.Info;
console.log(info)



