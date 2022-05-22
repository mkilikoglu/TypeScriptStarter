interface  Vehicle{

    addPassengers(passenger:Passenger):void;
}
interface  Point{
    x:number,
    y:number
}
interface Passenger{

    name:string;
    phone:number;
}
class Taxi implements Vehicle{
    /*private  color:string;
    private currentLocation:Point;*/
    constructor(private location:Point,private color:string) {

    }
    addPassengers(passenger: Passenger) {
        console.log('Phone:'+passenger.phone,'Name:'+passenger.name+'location:X'+this.location.x+'LocationY'+this.location.y)
    }
}


let taxi_1:Taxi=new Taxi({x:1,y:7},'Blue');
let taxi_2:Taxi=new Taxi({x:1,y:7},'ASASASAS');
console.log(taxi_1)
console.log(taxi_2)

taxi_1.addPassengers({name:'sdsd',phone:36})
//taxi_1.addPassengers();



