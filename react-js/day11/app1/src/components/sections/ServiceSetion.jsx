import React, {useState} from 'react'

const ServiceSection = ({serviceName}) => {
    let status = false
    if(serviceName == 'webdevelopment' || serviceName == 'mobiledevelopment' || serviceName == 'digitalmarketing') {
        status = true
    }
    if(!status) return (<h1>Service {serviceName} not found!</h1>)
    return (
        <div id="service-section">
            <h1>This is {serviceName} page</h1>
        </div>
    )
}

export default ServiceSection

