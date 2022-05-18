// function fizzBuzz(input){
//     if ((input % 3 === 0) && (input % 5 === 0)) 
//       return 'FizzBuzz';
//     if (typeof input !== 'number') 
//       return 'NaN';
//     if (input % 3 ===0) 
//       return 'Fizz';
//     if (input % 5 === 0) 
//       return 'Buzz';
//     return input;
// }
// const output = fizzBuzz(15);
// console.log(output);

function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoints = 5;

    if (speed < speedLimit +kmPerPoints) 
      console.log('ok');
    else {
      const points = Math.floor((speed - speedLimit) / kmPerPoints);
      if (points >= 12)
        console.log('License suspended');
      else
        console.log('Points:', points);
      
    }
    
}
checkSpeed(75);
