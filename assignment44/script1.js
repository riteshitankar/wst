document.getElementById('e').innerHTML = 'E for ELEPHANT';
// window.alert('afasdsdf');

// let data = window.confirm("YES or NO ??");
// console.log(data); //will print true on yes and false on no



let name = 'ritesh'
let age = 65;
let _product = true; 
let product_price = 55.55;
let product_name ;
let product1 = 'sfgfs21561';
let product2 = 5542346-'sdfs';
let product_curly_ = {};
let product_squre_ = [];
let product_simple_ = ('');

console.log(name, typeof(name));
console.log(age,typeof(age));
console.log(_product,typeof(_product));
console.log(product_price,typeof(product_price));
console.log(product_name,typeof(product_name));
console.log(product1,typeof(product1));
console.log(product2,typeof(product2));
console.log(product_curly_,typeof(product_curly_));
console.log(product_squre_,typeof(product_squre_));
console.log(product_simple_,typeof(product_simple_));



console.log(isNaN(65)); //false //only check for NaN ???
console.log(isFinite('5545')); //true //only for number, irrespective of its data type


console.log(typeof 6515); //number


console.log("TYPE CASTING");

let str1 = 'STRING';
let num1 = 1515;
let bol1 = true;

// str to num and bool
console.log('str to num and bool') 
console.log(Number(str1),'Number');
console.log(Boolean(str1),'Boolean');


// num to str and bool
console.log('num to str and bool') 
console.log(String(num1),'String');
console.log(Boolean(num1),'Boolean');

// bool to str and num
console.log('bool to str and num')
console.log(Number(bol1),'Number');
console.log(String(bol1),'String');


// conditional 

// if
age = 111;
if(age >= 18){
    console.log('you can vote') 
}

// if-else 
age = 1;
if(age >= 18) {
    console.log('you can vote');
}
else {
    console.log('you cannot vote')
}

// else-if 
let shape = '';
if(shape == 'circle'){
    console.log('its a cirle');
}
else if(shape == 'squre') {
    console.log('its a squre');
}
else if(shape == 'triangle') {
    console.log('its a triangle');
}
else {
    console.log('shape is out of list');
}

// nested if
 age = 17;
let licence = false;
if (age >= 18){
    if(licence){
        console.log('you can drive');
    }
    else {
        console.log('get your dl first');
    }
}
else {
    console.log('you are ineligible');
}



// switch case 

let choise = 'sat';

switch (choise) {
    case 's':
        console.log('sunday');
        break;
    case 'm':
        console.log('monday');
        break;
    case 't':
        console.log('tuesday');
        break;
    case 'w':
        console.log('wednesday');
        break;
    case 'thu':
        console.log('thursday');
        break;
    case 'f':
        console.log('friday');
        break;
    case 'sat':
        console.log('saturday');
        break;

    default:
        console.log('invalid day');
        break;
}


//DONE >>> RITANKAR