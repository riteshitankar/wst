import React, { useState, useEffect } from "react";
import { fetchData } from './api/test.js'

// styling 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const App = async () => {
    const [responseData, setResponseData] = useState(null)

    useEffect(() => {
        const getTestData = async () => {
            try {
                const response = await fetchData();
                setResponseData(response.data);
            } catch (err) {
                console.err('Error while featching data: ', err)
            }
        };
        getTestData();
    }, []);

   


    return (
        <>
            <button className="btn bg-dark text-light" onClick={fetchData}>
                CLICK TO FETCH DATA
            </button>
            {responseData && (
                <div>
                    <h1>Message : {responseData.message}</h1>
                    <h1>Checkcode : {responseData.checkcode}</h1>
                    <div>
                        <strong>UserData: </strong>
                        <ul>
                            <li>Name: {responseData.userData.name}</li>
                            <li>Phone: {responseData.userData.phone}</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
export default App