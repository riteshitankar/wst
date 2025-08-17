console.log('assignment-49');


// next leap year 

let current_year =3000;

let next_leap_year = current_year

let willLoopRun = true

while(willLoopRun){
    next_leap_year++
    let year = next_leap_year
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            willLoopRun = false
        }
    } else if (year % 4 == 0) {
        willLoopRun = false    
    }
}

console.log(next_leap_year);






// range of leap year

let start = 2000
let start2 = start
let end = 2025

let count = 0

while (start<=end) {
    let year = start
    if (year%100==0) {
        if (year%400 == 0) {
            count++
            console.log(year)
        }
    } else if (year%4 == 0) {
        count++
        console.log(year)
    }
    start++
}

console.log("their are total " + count + " leap year in range of " + start2 + " to " + end + " !")


//ritankar