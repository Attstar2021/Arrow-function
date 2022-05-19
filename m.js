// function showNumber(limit){
//     for (i = 0; i <= limit; i++){
//       if (i % 2 ===0)
//         console.log(i, 'EVEN')
//       else
//         console.log(i, 'ODD')
//     }
// }
showNumber(10);
function showNumber(limit){
  for (i = 0; i <= limit; i++){
    const message = (i % 2 === 0) ? "EVEN": "ODD";
     console.log(i, message);
  }
}
//next exercise 
//console.log(sum(10));

function sum(limit){
  let sum = 0;

  for (let i = 0; i<= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
    sum += i;

  return sum;   
}
//new exercise

// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));
// function calculateGrade(marks){
//   let sum = 0;

//     for (let mark of marks)
//       sum += mark;

//   let average = sum / marks.length;

//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';
  
  
// } can make it two smaller functions like this

const marks = [80, 80, 99];

console.log(calculateGrade(marks));
function calculateGrade(marks){
 const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A'; 
}

function calculateAverage(array){
  let sum = 0;
  for (let mark of marks)
   sum += mark;
  return sum / array.length;

}


/**new function */


