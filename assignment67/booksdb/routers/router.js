import express from  'express'

import {getDetails, byFilter, randomBook, allBooks, searchBookById, addBooks,deleteBooks} from '../controllers/control.js'

let router = express.Router()

router.get('/',(request,response) => {
    response.redirect('/details')
})
router.get('/details',getDetails)
router.get('/filter',byFilter)
router.get('/random',randomBook)
router.get('/all',allBooks)
router.post('/add',addBooks)
router.get('/id/:id',searchBookById)
router.delete('/delete/:id', deleteBooks);

export {router}