/*
Gregorian Calendar Rule: In the Gregorian calendar, a year is a leap year if it is divisible by 4, unless it is also a century year (ends in 00). In that case, it must be divisible by 400 to be a leap year. 
Example: The year 2000 was a leap year because it's divisible by 400, but the years 1900 and 2100 are not leap years because they are only divisible by 100.
*/

let yr = 1680;

if(yr%100==0){
    if(yr%400 == 0){
        console.log(yr,'is a leap year');
    }
    else {
        console.log(yr,'is not a leap year');
    }
}
else if(yr%4==0){
    console.log('Yes',yr,'is a leap year');
}
else{
    console.log(yr,'is not a leap year or wrong input');
}

