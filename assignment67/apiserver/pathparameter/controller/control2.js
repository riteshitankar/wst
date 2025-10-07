const home = (req, res) => {
  try {
    const { name, phone, age, city } = req.params;  // using route params

    if (!name || !phone || !age || !city) {
      throw new Error("One or More parameter is missing");
    }

    // Print in console
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Age:", age);
    console.log("City:", city);

    res.send(`Hello ${name}, 
      Your current location is ${city}.
      Your contact number that you entered is ${phone}.
      And You are ${age} years old.`);
  } catch (error) {
    console.error("Error in home controller:", error.message);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default home;
