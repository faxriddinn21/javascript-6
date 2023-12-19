// func-1

// function power(a, n) {
//     if (n === 0) {
//         return 1; 
//     }

//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= a;
//     }

//     return result;
// }

// let base = 3;
// let exponent = 5;

// let result = power(base, exponent);
//  console.log(result); 

    



//  func-2

// function mean(a, b) {
//     let arifMetik = (a + b) / 2;
//     let geoMetrik = Math.sqrt(a * b);

//     return [arifMetik, geoMetrik];
// }

// let num1 = 12;
// let num2 = 48;

// let result = mean(num1, num2);
// console.log(result[0]); 
// console.log(result[1]); 





// func-3

// function sign(n) {
//     if (n < 0) {
//         return -1;
//     } else if (n > 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let son = 10;
// let result = sign(son);
// console.log(result); 




// func-4

// function numberOfRoots(A, B, C) {
//     let diskerment = B ** 2 - 4 * A * C;

//     if (diskerment > 0) {
//         return 2; 
//     } else if (diskerment === 0) {
//         return 1; 
//     } else {
//         return 0; 
//     }
// }

// let A = 1;
// let B = -6;
// let C = 9;

// let result = numberOfRoots(A, B, C);
// console.log(result); 




// func-5

// function areaCircle(R) {
//    let pi = Math.PI;
//   let area = pi * Math.pow(R, 2);
//     return area;
// }

// let radius = 5;
// let result = areaCircle(radius);
// console.log(result); 





// func-6

// function sumRange(A, B) {
//     if (A > B) {
//         return 0;
//     }

//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }

//     return sum;
// }

// let raqam_1 = 8;
// let raqa_2 = 10;
// let result = sumRange(raqam_1, raqa_2);
// console.log(result); 





// func-7

// function calc(A, B, S) {
//     switch (S) {
//         case "+":
//             return A + B;
//         case "-":
//             return A - B;
//         case "*":
//             return A * B;
//         case "/":
//             return B !== 0 ? A / B : 0; 
//         default:
//             return 0; 
//     }
// }

// console.log(calc(10, 15, "*")); 
// console.log(calc(7, 8, "+")); 
// console.log(calc(10, 0, "/")); 
// console.log(calc(5, 3, "%")); 




// func-8

// function isEven(K) {
//     return K % 2 === 0; 
// }

// console.log(isEven(10)); 
// console.log(isEven(7)); 
// console.log(isEven(0)); 




// func-9

// function sortABC(a, b, c) {

//     let minNumber = Math.min(a, b, c);

//     let maxNumber = Math.max(a, b, c);

//     let middleNumber = a + b + c - minNumber - maxNumber;

//     console.log(minNumber + ', ' + middleNumber + ', ' + maxNumber);
// }

// sortABC(10, 5, 8);
// sortABC(3, 1, 7); 




// func-10

// function isPowerN(K, N) {
  
//     if (K <= 0 || N <= 0) {
//         return false;
//     }

//     return Math.pow(Math.round(Math.pow(K, 1 / N)), N) === K;
// }

// console.log(isPowerN(8, 2)); 
// console.log(isPowerN(27, 3)); 
// console.log(isPowerN(5, 2)); 




// func-11

// function isPrime(N) {
  
//     if (N > 1) {
      
//         for (let i = 2; i <= Math.sqrt(N); i++) {
  
//             if (N % i === 0) {
//                 return false;
//             }
//         }
    
//         return true;
//     } else {
 
//         return false;
//     }
// }

// console.log(isPrime(7)); 
// console.log(isPrime(12));
// console.log(isPrime(1)); 





// func-12

// function numberOfPrime(N) {
//     let count = 0; 

//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) {
//             count++; 
//         }
//     }

//     return count; 
// }

// console.log(numberOfPrime(10)); 





// func-14

// function inverseNumber(N) {
 
//     const digits = [];

//     while (N > 0) {
//         const digit = N % 10;
//         digits.push(digit);
//         N = Math.floor(N / 10);
//     }

//     let result = 0;
//     for (let i = 0; i < digits.length; i++) {
//         result = result * 10 + digits[i];
//     }

//     return result;
// }

// console.log(inverseNumber(56814)); 




// func-16

// function factorial(N) {

//     if (N < 0) {
//         return 1;
//     }

//     let result = 1;

//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }

//     return result;
// }

// console.log(factorial(5));
// console.log(factorial(0)); 
// console.log(factorial(-3)); 




// func-17

// function getSum3(N) {
//     let sum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// console.log(getSum3(15)); 




// func-18

function sumOddEven(N) {
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }

    return [sumOdd, sumEven];
}

console.log(sumOddEven(10));
