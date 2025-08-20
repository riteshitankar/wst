
// push , pop  // from end
// shift, unshipt // from beginning

let array1 = ['ritesh','itankar'];
array1.push('दोन बैले');
array1.push('तेली');
array1.push(108)
console.log(array1)

array1.unshift('माननीय');
array1.unshift('श्री');
array1.unshift('श्रीमंत');
array1.unshift('श्री');
console.log(array1);

array1.pop();
console.log(array1);
array1.shift();
console.log(array1);

array1.splice(2,1)
console.log(array1);

array1.splice(3,0,'laxman');
array1.splice(5,2);
console.log(array1);


array1.splice(5,0,'At Post Aptur','Tah Umred','Dist Nagpur','State of Maharashtra');
console.log(array1);
