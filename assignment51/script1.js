// // do while loop 


// // next leap year
// let current_year = 3000;
// let next_leap_year = current_year;

// do {
//     next_leap_year++;
//     let year = next_leap_year;
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             break;
//         }
//     } else if (year % 4 == 0) {
//         break;
//     }
// } while (true);
// console.log(next_leap_year);

// // palindrome
// let value1 = prompt('Enter the value to check the palindrome: '); 
// let value2 = "";     
// let length = value1.length - 1;
// do {
//     value2 = value2 + value1.charAt(length);
//     length--;
// } while (length >= 0);
// if (value1 == value2) {
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }

// // sum of total number
// let svalue = 10;
// let sum = 0;
// let i = 1;
// do {
//     sum += i;
//     i++;
// } while (i <= svalue);
// console.log('The sum is:', sum);

// // factorial
// let fvalue = 10;
// let fact = 1;
// let j = 1;
// do {
//     fact *= j;
//     j++;
// } while (j < fvalue);
// console.log('The factorial is', fact);



//  for loop

// next leap year
let current_year = 3000;
let next_leap_year;

for (next_leap_year = current_year + 1; ; next_leap_year++) {
    let year = next_leap_year;
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            break;
        }
    } else if (year % 4 == 0) {
        break;
    }
}
console.log(next_leap_year);



// palindrome
let value1 = prompt('Enter the value to check the palindrom: '); 
let value2 = "";     

for (let length = value1.length - 1; length >= 0; length--) {
    value2 = value2 + value1.charAt(length);
}

if (value1 == value2) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}



// sum of total number
let svalue = 10;
let sum = 0;

for (let i = 1; i <= svalue; i++) {
    sum += i;
}

console.log('The sum is:', sum);



// factorial
let fvalue = 10;
let fact = 1;

for (let j = 1; j <= fvalue; j++) {
    fact *= j;
}

console.log('The factorial is', fact);
