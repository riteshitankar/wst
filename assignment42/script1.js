// (1) ARITHMATIC OPERATORS: +,-,*,/,%,**,Math.pow(a,b)

a = 20;
b = 2;
console.log('a =>',a ,';', 'b =>',b);
console.log('Addition',a + b); //addition
console.log('Substraction',a - b); //substraction
console.log('Multiplication',a * b); //multiplication
console.log('Division',a / b); //division
console.log('Modulus',a % b); //modulus (remainder)
console.log('Exponentiation',a ** b); //exponentiation (a rest to power b)
console.log('Math.pow(a,b)', Math.pow(a,b))
// a++;
// console.log('Increment a++',a); // increased by 1
// a--;
// console.log('Decrement a--',a); // decreased by 1



// (2) ASSIGNMENT OPERATORS:  =,+=,-=,*=,/=,%=,**=

a = 10;
b = a;
c = 20;
d = 2;
console.log('a =>',10,';','b =>','a',';','c =>',c);
console.log(a);    // 10
console.log(a+=b); //20
console.log(a-=b); //10
console.log(a*=c); //200
console.log(a/=c); //10
console.log(a%=a); //0
a = 20;
console.log(a**=d); //400




// (3) COMPARISION OPERATOR: ==,===,!=,!==,<,>,<=,>= 

a = 20;
b = '20';
c = 40;
console.log(a==b); //true
console.log(a===b); //false because different type
console.log(a!=b); //false
console.log(a!==b); //true
console.log(a<c); //true 
console.log(c>a); //true
console.log(20>=20); //true
console.log(20<=20); //true



// (4) LOGICAL OPERATOR: &&, ||, !

// && logical and
console.log(true&&true); //true
console.log(true&&false); //false
// || logical or
console.log(true||true); //true
console.log(true||false); //true
console.log(false||false); //false
// ! logical not
console.log(!(true||false)); //false
console.log(!(false)); true
console.log(!true); false



// (5) BITWISE OPERATOR: &,|,~,^

// & [all 1 gives 1 otherwise 0] 
a = 5; //101
b = 1; //001
// 101 & 001 = 001
console.log(a & b); //1

// | [single 1 gives a 1; all 0 only gives 0]
console.log(a | b); //5
// 101 | 001  = 101

// ~ [invert the value i.e  0 to 1 and 1 to 0]
console.log(~a); //101 => 010 => 2
// ~n= -(n+1) => -(5+1) =-6
console.log(~8);
// ~8 = -(8+1) = -9

//  ^ : xor [if both are different than only 1 otherwise 0 when both are same]
a = 5; //101
b = 3; //011
console.log(a^b); //110 i.e. 6


// SHIFT ASSIGNMENT OPERATORS: <<=, >>=,>>>
let x = 5; //binary : 101
x <<= 1;   //binary : 1010 
console.log('Left Shift',x) //number : 10 //binary : 1010
x >>= 2; //binary : 0010
console.log('Right Shift',x); //number : 2 //binary : 0010 
x = 4; //100
console.log('Zero Fill, Right Shift', x>>>1) // output: 2 //010



// (6) TERNARY OPERATOR: ?:;
console.log(false ? 'THE STATEMENT IS TRUE' : 'THE STATEMENT IS FALSE');




// (7) MEMBER ACCESS OPERATOR: .
console.log('hello ironman from console.log');
// window.alert('hello peper from window.alert');
document.write('hello spiderman from document.write');



// (8) INCREMENT AND DECREMENT OPERATOR : ++a, a++, --a, a--
// pre : first operation then print
// post: first print the value then operation will occur
// post increment
a = 10;
console.log(a++); //will print as it is and increase [10]
console.log(a++); //will print as it is and increase [11]
console.log(a); //will print increased value i.e print as it is [12]
// post decrement
console.log(a--); //will print 12 and then decrease -1 [12]
console.log(a--); //will print 11 and then decrease -1 [11]
console.log(a); //will print [10]
//pre increment 
console.log(++a); //a will increase and print at a same time [11]
console.log(++a); //a will again increased and print at a same time [12]
console.log(a); //print the last increased + printed value because it is a pre increment [12]
// pre decrement 
console.log(--a); // a will decrease first and print at a same time [11]
console.log(--a); //a will again decrease first and then print as it is [10]
console.log(a); // print the last decreased value because it is a pre decrement [10]

//DONE >>> RITANKAR