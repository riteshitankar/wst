import express from  "express";

let app = express()
let port = 7006;

app.set('view engine','ejs');
app.set(express.static('public'));

app.get('/',(request, response) => {
    let fruits = [
        {name : 'apple', quantity : '415'},
        {name : 'mango', quantity : '425'},
        {name : 'banana', quantity : '435'},
        {name : 'orange', quantity : '445'},
        {name : 'kivi', quantity : '455'},
        {name : 'pineapple',quantity : 888}
    ]
    // response.send('Hello, KING 👑 here .....');
    response.status(200).render('index',{fruitlist : fruits})
});
app.listen(port, () => {
    console.log('Server is running on ',port,'port');
})





