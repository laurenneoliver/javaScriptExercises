/*
      RACE DAY  
   ---------------

The program is designed to register runners for the race and give them instructions on race day based on time of arival and age.

Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).

*/

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

if (runnerAge >= 18 && registeredEarly == true) {
  raceNumber += 1000;
  console.log('Your race will start at 9:30 am');
} else if (runnerAge >= 18 && registeredEarly == false){
  console.log('Your race will start at 11:00 am, your race number is', raceNumber);
} else if (runnerAge < 18) {
  console.log('Your race will start at 12:30 pm, your race number is', raceNumber)
}

