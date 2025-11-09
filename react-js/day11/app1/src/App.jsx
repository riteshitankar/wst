import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Service from './components/pages/Service.jsx'

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/service' element={<Service />}></Route>
            </Routes>
        </Router>
        </>
    )
}


export default App