const fibonacci = (num) => {

    //edge case
    if(num ===0 || num ===1) {
        return num;
    }
   //to get each new fib number you add the two in front of it
   
   let numberOne = 0;
   let numberTwo = 1;
   let sum = numberOne + numberTwo;
   //create a for loop to add each number till reach out final result
   for(let i = 2; i < num; i++) {
        numberOne = numberTwo;
        numberTwo = sum;
        sum = numberOne + numberTwo;
   }
   
   //return console.log(sum);
   return sum;
}

//fibonacci(10) //-> 2
module.exports = {fibonacci}
