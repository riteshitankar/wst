// part 1 : working properly

// import React,{useEffect} from "react";
// import {Outlet, useNavigate, useParams} from 'react-router-dom'

// import Header from "./sections/includes/Header.jsx";
// import Footer from "./sections/includes/Footer.jsx";

// const Dashboard = () => {
//     let navigate = useNavigate()
//     let {name} = useParams ()
//     useEffect(()=>{
//         if (name!='ritesh') {
//             navigate('/')
//         }
//     },[])
//     return (
//         <>
//         <Header />
//         <h1>This is dashboard page of mr {name}</h1>
//         <button onClick={()=>navigate('/')}>
//             Back to home
//         </button>
//         <Outlet />
//         <Footer />
//         </>
//     )
// }

// export default Dashboard



// part 2 : not working

import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "./sections/includes/Header.jsx";
import Footer from "./sections/includes/Footer.jsx";

const Dashboard = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  // for javascript
  useEffect(() => {
    if (name != "ritesh") {
      console.log("Access denied for:", name);
    }
  }, []);

  // Conditional rendering
  if (name == "ritesh") {
    return (
      <>
        <Header />
        <h1>This is dashboard page of mr. {name}</h1>
        <button onClick={() => navigate("/")}>Back to home</button>
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <h1>
          Sorry, mr. {name}, you are not our royal member. Plese be our royal member first.
        </h1>
        <button onClick={() => navigate("/")}>Back to home</button>
        <Footer />
      </>
    );
  }
};

export default Dashboard;
