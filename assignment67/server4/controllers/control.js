let getHome = (request, response) => {
    // response.status(200).json('This is the first json file')
    response.status(200).render('index')
    // response.status(200).render('index');
}
let getAbout = (request, response) => {
    // response.status(200).json('This is the second json file')
    // response.status(200).sendFile('about')   //not running
    response.status(200).render('about');
}
let getLocation = (request, response) => {
    response.status(200).render('location');
}
let getPricing = (request, response) => {
 response.status(200).render('pricing');
}
export {getHome, getAbout,getLocation ,getPricing}
