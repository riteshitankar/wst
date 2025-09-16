import express from 'express'
let app = express();
let port = 7000;
app.get("/", (request, response) => {
    response.send(`
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: bisque;">
    <h1 style="color:green">WELCOME TO MY NODE SERVER 1, काही चाय पाणी घ्यान का राव, की आज जेवनच करून जायचं विचार आहे! #ritankar</h1>
    <form action="">
        <input type="text" placeholder="Enter Your First Name">
        <br>
        <input type="text" placeholder="Enter Middle  Name">
        <br>
        <input type="text" placeholder="Enter Sirname Name">
        <br>
        Gender <br>
        <input type="radio" name="gen" id="">
        FeMale
        <input type="radio" name="gen" id="">
        Male
        <input type="radio" name="gen" id="">
        Rather not say
        <br>
        <button type="submit" value=""> submit now</button>
    </form>
</body>
</html>
        `)



})

app.listen(port, () => {
    console.log('SERVER IS RUNNING ON THE PORT NUMBER', port);
})


// HTTP://LOCALHOST: