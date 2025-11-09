import React from  'react'

import Header from '../sections/includes/Header.jsx'
import Footer from '../sections/includes/Footer.jsx'
import ServiceSection from '../sections/ServiceSetion.jsx'

import {useParams} from 'react-router-dom'

const Service = () => {
    let {servicename} = useParams()
    return (
        <>
        <Header />
        <ServiceSection ServiceName = {servicename} />
        <Footer />
        </>
    )
}


export default Service

