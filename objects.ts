interface  Vehicle{
    currentLocation:Point;
    //getDistance(pointA:Point,pointB:Point):number;
    addPassengers(passenger:Passenger):void;
    //removePassenger(passenger:Passenger):void;
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
    //.. propertios of taxi
    currentLocation:Point;
    addPassengers(passenger: Passenger) {
        console.log('Phone:'+passenger.phone,'Name:'+passenger.name)
    }
}

class Bus implements Vehicle {
    currentLocation:Point;
    addPassengers(passenger: Passenger) {
        console.log('Phone:'+passenger.phone,'Name:'+passenger.name)
    }
}
let taxi_1:Taxi=new Taxi();

taxi_1.currentLocation=({x:1,y:7});
taxi_1.addPassengers({name:"74", phone:7});
console.log(taxi_1.currentLocation.y)

let taxi2=new Taxi();
taxi2.currentLocation=({x:4,y:22222});
console.log(taxi2)