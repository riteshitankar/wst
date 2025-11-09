import React, {useState} from "react";

const Service = ({servicename}) => {
    let status = false
    if (servicename == 'webdevelopment' || servicename == 'mobile-development' || servicename == 'digital-marketing') {
        status = true
    }
    if (!status) return (<h1>service {servicename} not found !</h1>)
    return(
        <div id="servicesection">
            <h1>this is {servicename} page</h1>
        </div>
    )
}

export default Service