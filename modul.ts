import {Taxi} from "./taxi";
import {Passenger} from "./ExportPassenger";


function addPassengers(passenger: Passenger) {
    console.log('Phone:'+passenger.phone,'Name:'+passenger.name+'location:X'+this._location.x+'LocationY'+this._location.y)
}

let taxi =new Taxi({x:1,y:7},'Blue',{type:'kreditcard',total:'231USD'});

console.log(taxi);

