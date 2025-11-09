import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx' // aboutus
import Contact from './components/pages/Contact.jsx' // contactform
import Service from './components/pages/Service.jsx' //servicesection

const App = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/service/:servicename' element={<Service />}></Route>
            </Routes>
        </Router>
        </>
    )
}

export default App