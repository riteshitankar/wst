import React from 'react'
import { useState } from 'react'

export let Comp1 = () => {
    return (
        <>
        <h1 style={{color :'red'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        </>
    )
}


export let Comp2 = () => {
    return (
        <>
        <h1 style={{color :'green'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        </>
    )
}


// conditional rendering
export let Comp3 = () => {
   
    let [numbers, setNumber] = useState(['kunal','aditya','santur','anu'])
   
    
    return (
        <>
        {
        numbers.map((num, index) => {
            return (
                <h1 key={index}>{num}</h1>
            )
        })
        }
        </>
    )
}



