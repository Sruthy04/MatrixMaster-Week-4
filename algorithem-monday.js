// Game of 3s.

// define the function takes number as a parameter.
// while loop until number is bigger than 1.
// if condition to check if the number divisible by 3.
// true divide by 3.
// false check the remainder is 1.
// if it's true, subtract 1 and divide by 3.
// false add 1 and divide by 3.
// return the number.

function GameOf3s(number) {
    while (number > 1){
     if (number % 3 == 0){
        console.log(number,0);
        number/=3;
    }else if (number % 3 == 1){
        console.log(number,-1);
        number-=1;
        number/=3;
        
    }else{
        console.log(number,+1)
        number+=1
        number/= 3  
    }
    } 
    return number;
}
console.log(GameOf3s(100));