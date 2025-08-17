// looping 

console.log('a45')
//while
let n = 0;
while(n <= 10) {
    console.log(n,'hello world')
    n++;
}

//factorial

// 10! = 10*9*8*7*6*5*4*3*2*1;
let y = Number(prompt('Ente the value to find the factorial : '));
let fact = 1;
let x = 1
while(x<=y){
    fact = fact * x;
    x++;
}
console.log('the factorial of',y,'is',fact);


// wap : find from 4 number is greater and if the all 4 numbers are same then it should print all the numbers are same
let a = 1;
let b = 2;
let c = 7;
let d = 7;
if(a>=b && a>=c && a>=d){
    console.log('A is greater than all');
}
else if(b>=a && b>=c && b>=d){
    console.log('B is the greater than all');
}
else if(c>=a && c>=b && c>=d) {
    console.log('C is greater than all');
}
else if(d>=a && d>=b && d>=c){
    console.log('D is greater than all');
}
else if(a == b && a==c && a==d){
    console.log('ABCD are sharing the same value');
}
else{
    console.log('something went wrong');
}


a = Number(prompt('Enter the value: '));

// positive number program 
if(a > 0){
    console.log('a is a positive number');
}
else if(a<0){
    console.log('a is a negative number');
}
else {
    console.log('you entered a wrong value');
}

// even or odd
if(a%2==0){
    console.log('a is an even number')
}
else {
    console.log('a is an odd number')
}


//DONE >>> RITANKAR