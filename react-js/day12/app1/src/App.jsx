import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// import pages 
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Website from './components/pages/Website.jsx'
import Service from './components/pages/Service.jsx'

// dashboard
import Dashboard from './components/pages/Dashboard.jsx'
import SettingComponents from './components/pages/sections/dashboardcomponents/SettingComponents.jsx'
import ProfileComponents from './components/pages/sections/dashboardcomponents/ProfileComponents.jsx'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/website' element={<Website />} />
                    <Route path='/service/:servicename' element={<Service />} />
                    <Route path='/dashboard/:name' element={<Dashboard />} >
                        <Route path='setting' element={<SettingComponents />} /> //outlet
                        <Route path='profile' element={<ProfileComponents />} /> //outlet
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App