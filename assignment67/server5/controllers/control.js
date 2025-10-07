let home = (request, response) => {
    // response.send('Hello User from control.js, This is the homes page.')
    response.status(200).render('index');

}
let about = (request, response) => {
    // response.send('Hello User from control.js, This is the abouts page.')
    response.status(200).render('about');
}
let service = (request, response) => {
    // response.send('Hello User from control.js, This is the services page.')
    response.status(200).render('service');
}
let contact = (request, response) => {
    // response.send('Hello User from control.js, This is the contacts page.')
    response.status(200).render('contact');
}
let carrier = (request, response) => {
    // response.send('Hello User from control.js, This is the carriers page.')
    response.status(200).render('carrier');
}
let form = (request,response) => {
    response.status(200).render('form')
}

let postsubmitform = (request,response) => {
    console.log(request.body)
    response.status(301).redirect('/form')
}

export {home, about, service, contact, carrier, form, postsubmitform};
