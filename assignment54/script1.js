let userinput = 'abcdefghi@6Q';
let passpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/
result = passpattern.test(userinput);

if(result == true){
    console.log('You have created a new password');
} else {
    console.log('Please follow the password convention');
}
console.log(result);



// passpattern is made using chatgpt. other than that everything is written by me 
// done >>> ritankar