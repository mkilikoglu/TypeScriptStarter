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