import React from "react";
import { useParams } from "react-router-dom";

import Header from './sections/includes/Header.jsx'
import ServiceMe from './sections/Serviceme.jsx'
import Footer from './sections/includes/Footer.jsx'

const Service = () => {
    let {servicename} = useParams()
    return (
        <>
        <Header />
        <ServiceMe servicenameinside={servicename}/>
        <Footer />
        </>
    )
}

export default Service




// For example, if you visit /service/web-design, the servicename will be "web-design".
// import { useParams } from 'react-router-dom'

// const Service = () => {
//   const { servicename } = useParams()
//   return(
//      <h1>Service: {servicename}</h1>
//   )
// }

// export default Service