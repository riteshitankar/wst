let home = (request, response) => {


    let { name, phone, age, city } = request.params;

    console.log('Name : ', name);
    console.log('Phone : ', phone);
    console.log('Age : ', age);
    console.log('City : ', city);

    response.send(`Hello ${name}, 
            Your current location is ${city}.
            Your contact number that you entered is ${phone}.
            And You are ${age} years old.`)
}

export default home;