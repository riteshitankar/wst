let value1 = prompt('Enter the value : '); 
let value2 = '';     
let length = value1.length - 1;

do {
    value2 = value2 +value1.charAt(length);
    length--;
} while (length>=0);

if (value1==value2) {
    console.log('palindrome');
} else {
    console.log('not palindrome');
}

// done >>> ritankar