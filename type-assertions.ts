let message='Hi Musti';//this type is string
let count =message.length;

message.trim();

let message2 ;
message2='Hi Musti again';//now type is any

let message3=' Hi Musti Hi';
let count3 =(<string>message3).length;
let length3 = (message3 as string).length;