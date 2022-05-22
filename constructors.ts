interface  Vehicle{
    currentLocation:Point;
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
    color:string;
constructor(location:Point,color?:string) {
    this.currentLocation=location;
    this.color=color;
}

    currentLocation:Point;
    addPassengers(passenger: Passenger) {
        console.log('Phone:'+passenger.phone,'Name:'+passenger.name)
    }
}


let taxi_1:Taxi=new Taxi({x:1,y:7},'Blue');
let taxi_2:Taxi=new Taxi({x:1,y:7});
console.log(taxi_1)
console.log(taxi_2)



