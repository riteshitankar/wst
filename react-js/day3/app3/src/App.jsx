import React from 'react'

// import react icon
import { AiFillAppstore  } from "react-icons/ai";
import { ImAirplane } from "react-icons/im";
import { CiBasketball,CiAlarmOn  } from "react-icons/ci";

// bootstarp 
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// components
import { Component1 } from './components/comp1.jsx';

const App = () => {
    function mul(n1,n2) {
        return n1*n2;
    }
    console.log(mul(9,5))

    return(
        <>
        <h1></h1>
        <h1 className='text-danger text-decoration-underline text-center'>Bootstrap </h1>
        <h6 className='bg-opacity-50 bg-secondary fst-italic fw-normal'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima veritatis at ex, aperiam mollitia laboriosam itaque tenetur vel cumque?</h6>
        <h6 className='bg-opacity-50 bg-primary fst-italic fw-normal'>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, impedit?</h6>
        <h6 className='bg-opacity-50 bg-warning fst-italic fw-normal'>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sequi quam illo. Totam minus exercitationem reprehenderit aut esse, recusandae ducimus aspernatur possimus.</h6>
        <AiFillAppstore className='text-primary fs-1'/>
        <ImAirplane className='text-danger fs-1'/>
        <CiBasketball className='text-secondary fs-1'/>
        <CiAlarmOn  className='text-secondary fs-1'/>
        <Component1 name='girdhari'/>
        <h1>{mul(9,5)}</h1>
      

        </>



    )
} 


export default App