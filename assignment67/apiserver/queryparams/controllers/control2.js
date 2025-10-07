let home = (req, res) => {
  try {
    let { name, phone, age, city } = req.query;

    if (!name || !phone || !age || !city) {
      throw new Error("Parameter(s) are missing");
    }

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Age:", age);
    console.log("City:", city);

    res.send(`My name is ${name}, my phone number is ${phone} and I am ${age} years old. I live in ${city}`);
  } catch (error) {
    console.error("Message for the console:", error.message);

    res.status(400).json({"Message for the browser": error.message });
  }
};

export { home };
