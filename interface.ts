let travelTo=(x,y)=>{

}

travelTo(1,2);


let travel2=(point:{x:number,y:number})=>{

}

travel2({x:12, y:12});

let getDistance=(pointA:Point,pointB:Point)=>{

}
interface  Point{
    x:number,
    y:number
}


interface  Vehicle{
    currentLocation:Point;
    getDistance(pointA:Point,pointB:Point):number;
    addPassengers(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;
}

interface Passenger{

    name:string;
    phone:number;
}
