import React from "react";

const ServiceMe = ({ servicenameinside }) => {
    let status = false;
    if (servicenameinside == 'web-design' || servicenameinside == 'web-development' || servicenameinside == 'react-app-dev') {
        console.log('true');
        status = true;
    }
    if (status) {
        return (
            <>
                <h1>Welcome to our {servicenameinside.replaceAll("-"," ")} page</h1>
            </>
        );
    }
    if (!status) {
        return (
            <>
                <h1>We does not provide {servicenameinside.replaceAll("-", " ")} service you are requesting for</h1>
            </>
        )
    }

};

export default ServiceMe;
