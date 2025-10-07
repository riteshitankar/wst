let home = (req, res) => {
  let { name, phone,age,city } = req.query;

  console.log("Name:", name);
  console.log("Phone:", phone);
  console.log("Age:", age);
  console.log("City:", city);

  res.send(`My name is ${name}, my phone number is ${phone} and I am ${age} years old. I live in ${city}`);
};



export {home};




// http://localhost:8005/home?name=ritesh&phone=5164986165&age=52&city=amravati
