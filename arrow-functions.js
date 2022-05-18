/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a,b) {
//     //code block
//     return a + b;
// } 
// let sum = addTwoNumbers (3, 5);
// console.log(sum);

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     //code block
//     return a + b;
// } 
// let sum = addTwoNumbers (3, 5);
// console.log(sum);

// // Single Line Arrow Function With Parameters
// //const addTwoNumbers2 = (a, b) => (a + b); also valid
// const addTwoNumbers2 = (a, b) => a + b;
// let sum2 = addTwoNumbers2(5, 8);
// console.log(sum2);

// // Implicit Returns
// const saySomething = message => console.log(message);
// saySomething('hello');

// const sayHello = () => console.log('hello!!');
// sayHello();

// // Returning Multiple Lines
// const returnMultipleLines = () => (
//     `<p>
//     this is a multiline string where i can write the\n long story and can stop writing and no one \nwants me to stop writing.
//     </p>`
// )
// console.log(returnMultipleLines());

function max(a, b) {
    if (a > b) return a;    
    else return b;        
    }
    let maximum = max (3, 5);
    console.log(maximum);

    //clean code 
    function max(a, b) {
        if (a > b) return a;    
        return b;        
        }
        let maximum2 = max (9, 5);
        console.log(maximum2);
        
        //more clean code
        function max(a, b) {
            return (a > b) ? a:b;       
            }
            let maximum3 = max (3, 10);
            console.log(maximum3);

            // function isLandscape(width, height) {
            //     if (width > height) return true;
            //     return false;    
            //     }
            //     let image = isLandscape (30, 40);
            //     console.log(image);    
            function isLandscape(width, height){
                return (width > height);
            }
            console.log(isLandscape(300, 500));