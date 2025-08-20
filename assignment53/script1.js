// function : next leap year
function getnextleapyear(current_year) {
    let next_leap_year = current_year;
    do {
        next_leap_year++;
        let year = next_leap_year;
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                break;
            }
        } else if (year % 4 === 0) {
            break;
        }
    } while (true);
    return next_leap_year;
}
console.log(getnextleapyear(3000));


// function : palindrome 
function palindromefn(value1) {
    let value2 = "";
    let length = value1.length - 1;
    do {
        value2 = value2 + value1.charAt(length);
        length--;
    } while (length >= 0);
    return value1 === value2;
}
console.log("Palindrome?", palindromefn("madam") ? "Yes" : "No");

// function: sum of total numbers
function sum_of_total_number(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}
console.log(sum_of_total_number(10));


//function : factorial
function for_factorial(n) {
    let fact = 1;
    let j = 1;
    do {
        fact *= j;
        j++;
    } while (j <= n);
    return fact;
}
console.log(for_factorial(10));


// done >> ritankar


function repeat_line(n) {
    for (let index = 0; index <= n; index++) {
        console.log(`${index} THIS IS THE FIRST LINE`);
    }

    let value1 = 2;
    let value2 = 1;
    do {
        console.log(`${value1} x ${value2} =>> ${value1 * value2}`);
        value2++;
    }
    while (value2 < 11);
}

repeat_line(20)


function table(n){
    console.log(`I am going to print the table from ${1} to ${n}`)
    for(let i = 1; i <= n; i++){
        console.log(`The table of ${i} is given below: `)
        for(let j = 1; j<11; j++ ){
            console.log(`${i} x ${j} =>> ${i*j}`)
        }
    }
}

table(60);