// let data = [
//     {name : 'amitabh',city : 'buldhana'},
//     {name : 'salman',city : 'bhandara'},
//     {name : 'shahrukh',city : 'gadchiroli'},
//     {name : 'amir',city : 'washim'},
//     {name : 'ajay',city : 'gondiya'},
//     {name : 'akshay',city : 'latur'},
//     {name : 'ranveer',city : 'nagpur'},
//     {name : 'ranbeer',city : 'jalna'},
//     {name : 'sanjay',city : 'jadgao'},
//     {name : 'allu arjun',city : 'akola'},
// ]

let getHome = (req,res) => {
    // res.status(200).send('hello from the control page')
    // res.status(200).json('hello from the control page')
    res.status(200).send(data);   // json
    // res.status(200).sendFile("./index1.html")
    

}

let getAnotherRoute = (req,res) => {
    // res.status(200).send('this is the another hello from the another user')
    // res.status(200).json('this is the another hello from the another user')
    res.status(200).send(data); // json

    // res.status(200).sendFile('./index2.html')
}


export {getHome,getAnotherRoute}



let data = [
    {name : 'amitabh',city : 'buldhana'},
    {name : 'salman',city : 'bhandara'},
    {name : 'shahrukh',city : 'gadchiroli'},
    {name : 'amir',city : 'washim'},
    {name : 'ajay',city : 'gondiya'},
    {name : 'akshay',city : 'latur'},
    {name : 'ranveer',city : 'nagpur'},
    {name : 'ranbeer',city : 'jalna'},
    {name : 'sanjay',city : 'jadgao'},
    {name : 'allu arjun',city : 'akola'},
]
