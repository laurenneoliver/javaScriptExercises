/*

This project will calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

*/



var getSleepHours = (day) => {
  switch (day){
    case 'monday':
    return 6;
    break;
    case 'tuesday':
    return 7;
    break;
    case 'wednesday':
    return 8;
    break;
    case 'thursday':
    return 6;
    break;
    case 'friday':
    return 8;
    break;
    case 'saturday':
    return 9;
    break;
    case 'sunday':
    return 8;
    break;
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}
const getIdealSleepHours = () => {
  var idealHours = 8; 
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours == idealSleepHours){
    console.log('You got the ideal amount of sleep.');
    console.log('You sleep the ideal amount of', idealSleepHours, ' hours.');
  } else if (actualSleepHours > idealSleepHours){
    console.log('Looks like you got more sleep than needed.');
    console.log('You slept ', actualSleepHours-idealSleepHours, ' more hours than needed.');
  }
  else if (actualSleepHours < idealSleepHours){
    console.log('Looks like you need some more rest.');
    console.log('Try aiming for', idealSleepHours-actualSleepHours, ' more hours.');
  }
}
calculateSleepDebt();
