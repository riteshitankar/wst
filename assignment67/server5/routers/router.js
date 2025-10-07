/*
import express from 'express';

let router = express.Router();

router.get('/',(request,response) => {  
    response.send('Hello User, This page is home page')
})
router.get('/about',(request,response) => {  
    response.send('Hello User, This page is about page')
})
router.get('/carrier',(request,response) => {
    response.send('Hello User, This page is carriers page')   
})
router.get('/service',(request,response) => {
    response.send('Hello User, This page is services page')   
})
router.get('/contact',(request,response) => {
    response.send('Hello User, This page is contacts page')   
})

export default router;
*/



/*
import express from 'express';

let router = express.Router();

let home = (request, response) => {
    response.send('Hello User, This is the homes page.')
}
let about = (request, response) => {
    response.send('Hello User, This is the abouts page.')
}
let service = (request, response) => {
    response.send('Hello User, This is the services page.')
}
let contact = (request, response) => {
    response.send('Hello User, This is the contacts page.')
}
let carrier = (request, response) => {
    response.send('Hello User, This is the carriers page.')
}

router.get('/',home);
router.get('/about',about);
router.get('/service',service);
router.get('/contact',contact);
router.get('/carrier',carrier);

export default router;
*/



import express from 'express';

import {home, about, service, contact, carrier,form,postsubmitform} from '../controllers/control.js';

let router = express.Router();

router.get('/',home);
router.get('/about',about);
router.get('/service',service);
router.get('/contact',contact);
router.get('/carrier',carrier);
router.get('/form',form);
router.post('/submitform',postsubmitform);

export default router;