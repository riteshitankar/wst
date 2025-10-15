// जेव्हा आपण page referesh मरतो तर डायरेक्ट आपल्याला अपल्या डिटेल्स [name, phone, city, state] मिळतात 

// import React, { useState, useEffect } from "react";
// import { fetchData } from './api/test.js'

// //styling
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// const App = () => {
//     const [responseData, setResponseData] = useState(null)

//     useEffect(() => {
//         const getTestData = async () => {
//             try{
//                 const response = await fetchData();
//                 setResponseData(response.data);
//             } catch(err) {
//                 console.log('Error while fetching dataset:',err)
//             }
//         };
//         getTestData();
//     }, [])
//     return (
//         <>
//             <button className="btn bg-dark text-light" onClick={fetchData}>
//                 <h1>CLICK TO FETCH DATA</h1>
//             </button>
//             {responseData && (
//                 <div>
//                     <h1>Message : {responseData.message}</h1>
//                     <h1>Checkcode : {responseData.checkcode}</h1>
//                     <div>
//                         <strong>UserData</strong>
//                         <h1>Name : {responseData.userData.name}</h1>
//                         <h1>Phone : {responseData.userData.phone}</h1>
//                         <h1>City : {responseData.userData.city}</h1>
//                         <h1>State : {responseData.userData.state}</h1>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }
// export default App;




// same, nothing different from above only looks good because of the better styling but we have commented our useEffect so that after refereshing our page details should not display directly only looks when we click thebutton

import React, { useState, useEffect } from 'react';
import { fetchData } from './api/test.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await fetchData();
      setData(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

//   useEffect(() => {
//     handleFetch();
//   }, []);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-dark mb-4" onClick={handleFetch}>
        CLICK TO FETCH DATA
      </button>

      {data && (
        <div>
          <h3>Message: {data.message}</h3>
          <p>Checkcode: {String(data.checkCode)}</p>
          <div className="border p-3 rounded">
            <h5>User Data</h5>
            <p>Name: {data.userData.name}</p>
            <p>Phone: {data.userData.phone}</p>
            <p>City: {data.userData.city}</p>
            <p>State: {data.userData.state}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
